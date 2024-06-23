import React from "react";
import { cn } from "@/lib/utils";
interface TagProps {
  size?: "large" | "small" | "x-small";
  accentuated?: boolean;
  children: React.ReactNode;
}
const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ size, accentuated, children, ...props }, ref) => {
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
    const backgroundColor = accentuated ? "bg-yellow-200" : "bg-yellow-100";

    return (
      <div
        ref={ref}
        style={{
          fontSize,
          padding: "2.5px 6px 2.5px 6px",
          lineHeight: "24px",
          borderRadius: 8,
        }}
        className={cn(backgroundColor)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
