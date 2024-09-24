"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "../Button";

interface PromotionalBarProps {
  message: string;
  linkText: string;
  linkUrl: string;
}

export default function PromotionalBar({
  message,
  linkText,
  linkUrl,
}: PromotionalBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-green text-white py-2 px-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden sm:block flex-1" />
        <div className="text-center flex-grow sm:flex-grow-0  text-sm md:text-base font-semibold">
          <span className="">{message}</span>
          <br className="md:hidden" />
          <Link
            href={linkUrl}
            className="underline ml-1 sm:ml-2"
            target="_blank"
          >
            {linkText}
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Button
            variant="ghost"
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-secondary-foreground -mr-2 sm:mr-0"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
