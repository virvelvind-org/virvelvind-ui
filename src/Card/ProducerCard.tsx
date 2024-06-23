import React from "react";
import { cn } from "@/lib/utils";
import { Tag } from "../Tag";
import { LinkButton } from "../Button";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
interface ProducerCardProps {
  className?: string;
  imageUrl?: string;
  address?: string;
  name?: string;
  url: string;
  tags?: string[];
}

const EmptyImage = () => (
  <div className="w-full h-48 object-cover bg-grey-400 relative">
    <img
      src="/img/producer_placeholder.png"
      alt="Placeholder image"
      className="w-16 md:w-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>
);

const ProducerCard = React.forwardRef<HTMLDivElement, ProducerCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-sm bg-card text-card-foreground overflow-hidden shadow-lg flex flex-1 flex-col",
        className
      )}
      {...props}
    >
      <div className="relative">
        {props.tags &&
          props.tags.map((tag, i) => (
            <div
              key={i}
              className="absolute left-2 bottom-2 w-full flex flex-row flex-wrap gap-2"
            >
              <Tag size="x-small">{tag}</Tag>
            </div>
          ))}
        <Link href={props.url} className="bg-brown-500">
          {props.imageUrl ? (
            <img
              className="w-full h-48 object-cover bg-grey-300"
              src={props.imageUrl}
              alt=""
            />
          ) : (
            <EmptyImage />
          )}
        </Link>
      </div>
      <div className="p-3 flex flex-col flex-1 justify-end">
        <Link
          className="font-bold leading-tight"
          style={{ fontSize: 20 }}
          href={props.url}
        >
          {props.name}
        </Link>
        <p className="mt-2" style={{ fontSize: 15, fontWeight: 400 }}>
          {props.address}
        </p>
        <div className="flex-grow" />
        <div className="flex gap-2 mt-2 text-center">
          <LinkButton
            variant="link"
            href={props.url}
            rightIcon={<GoArrowRight />}
          >
            Läs mer
          </LinkButton>
        </div>
      </div>
    </div>
  )
);
ProducerCard.displayName = "Card";

export default ProducerCard;
