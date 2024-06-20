import React from "react";
import { cn } from "@/lib/utils";
import { Tag } from "../Tag";
import { Button } from "../Button";
import Link from "next/link";
interface ProductCardProps {
  className?: string;
  imageUrl: string;
  price?: number;
  oldPrice?: number;
  producer?: string;
  name?: string;
  isAvailable?: boolean;
  url: string;
  hideAddToCart?: boolean;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
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
        {typeof props.isAvailable !== "undefined" && !props.isAvailable && (
          <div className="absolute left-4 bottom-4">
            <Tag size="small">Inte i lager</Tag>
          </div>
        )}
        <Link href={props.url}>
          <img
            className="w-full h-48 object-cover"
            src={props.imageUrl}
            alt=""
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col flex-1 justify-end">
        <p style={{ fontSize: 15, fontWeight: 400 }}>{props.producer}</p>
        <Link className="font-bold" style={{ fontSize: 20 }} href={props.url}>
          {props.name}
        </Link>
        <div className="flex-grow" />
        <div className="flex gap-2 mt-8">
          <Tag size="large">{props.price} kr</Tag>

          {props.oldPrice && (
            <span className="text-sm text-muted-foreground line-through ml-2">
              {props.oldPrice} kr
            </span>
          )}
        </div>
        {!props.hideAddToCart && (
          <div className="mt-6">
            {props.isAvailable ? (
              <Button full>Lägg i varukorg</Button>
            ) : (
              <Button full disabled variant="disabled">
                Lägg i varukorg
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
);
ProductCard.displayName = "Card";

export default ProductCard;
