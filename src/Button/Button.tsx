import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FaSpinner } from "react-icons/fa";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "px-[20px] flex flex-row items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-400 hover:bg-yellow-100",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-black  font-bold",
        uppercase:
          "uppercase bg-yellow-400 text-black font-normal tracking-wider",
        disabled: "bg-gray-200 text-gray-400",
        tertiary:
          "bg-transparent text-black font-normal underline-offset-2 hover:underline-offset-4 hover:underline font-bold",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input bg-background font-bold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        link: "font-bold bg-transparent text-black underline-offset-2 hover:underline-offset-4 hover:underline hover:bg-transparent px-0",
      },
      wrap: {
        true: "whitespace-normal",
      },
      full: {
        true: "w-full",
      },
      size: {
        normal: "py-2 text-sm",
        small: "h-8 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "normal",
    },
  }
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  size?: "normal" | "small";
  wrap?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  rightIcon?: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  href?: string;
  size?: "normal" | "small";
  wrap?: boolean;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className,
      disabled,
      variant,
      full,
      size,
      href,
      children,
      wrap,
      isLoading,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <Link
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        className={cn(buttonVariants({ variant, size, full, wrap, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <FaSpinner className="animate-spin h-4 w-4 mr-4 text-black" />
        )}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      full,
      disabled,
      onClick,
      rightIcon,
      children,
      wrap,
      isLoading,
      ...props
    },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        onClick={!isLoading && !disabled ? onClick : undefined}
        className={cn(buttonVariants({ variant, size, full, wrap, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <FaSpinner className="animate-spin h-4 w-4 mr-4 text-black" />
        )}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
