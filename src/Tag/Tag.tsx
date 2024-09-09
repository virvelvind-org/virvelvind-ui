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
  yellow: {
    backgroundColor: "bg-yellow-400",
    textColor: "text-black",
  },
  activeGreen: {
    backgroundColor: "bg-lime-600",
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
      <div className="flex items-start justify-start">
        <div
          ref={ref}
          style={{
            fontSize,
            padding: "2.5px 6px",
            borderRadius: 8,
          }}
          className={cn(backgroundColor, textColor, "rounded-full")}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
