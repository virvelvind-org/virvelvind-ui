import * as React from "react";
import Link from "next/link";

interface IconButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const IconButton = React.forwardRef<HTMLAnchorElement, IconButtonProps>(
  ({ href, children, onClick, className, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} {...props}>
          <a
            className={`flex items-center w-10 h-10 justify-center rounded-full hover:bg-gray-200 bg-yellow-200 ${className}`}
          >
            {children}
          </a>
        </Link>
      );
    }
    return (
      <button
        onClick={onClick}
        className={`flex items-center w-10 h-10 justify-center rounded-full hover:bg-gray-200 bg-yellow-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default IconButton;

IconButton.displayName = "IconButton";
