import React from "react";
import { cn } from "@/lib/utils";
interface TagProps {
  size?: "large" | "small" | "x-small";
  accentuated?: boolean;
  children: React.ReactNode;
  color?: keyof typeof colorTable;
}

const colorTable = {
  red: {
    backgroundColor: "bg-red",
    textColor: "text-white",
  },
  green: {
    backgroundColor: "bg-green",
    textColor: "text-white",
  },
};

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ size, accentuated, children, color, ...props }, ref) => {
    let fontSize = "16px";
    if (size === "large") {
      fontSize = "20px";
    }
    if (size === "small") {
      fontSize = "14px";
    }
    if (size === "x-small") {
      fontSize = "12px";
    }
    let backgroundColor = accentuated ? "bg-yellow-200" : "bg-yellow-100";
    let textColor = "text-black";
    if (color) {
      backgroundColor = colorTable[color].backgroundColor;
      textColor = colorTable[color].textColor;
    }

    return (
      <div
        ref={ref}
        style={{
          fontSize,
          padding: "2.5px 6px 2.5px 6px",
          lineHeight: "24px",
          borderRadius: 8,
        }}
        className={cn(backgroundColor, textColor)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
