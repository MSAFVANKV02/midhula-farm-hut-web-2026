"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "whatsapp"
    | "red"
    | "dark";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    const variants = {
      default:
        "bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm hover:shadow-md hover:shadow-blue-600/20",
      red:
        "bg-red-600 hover:bg-red-700 text-white font-semibold shadow-sm hover:shadow-md hover:shadow-red-600/20",
      whatsapp:
        "bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold shadow-sm hover:shadow-md hover:shadow-[#25D366]/25",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80",
      outline:
        "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400",
      dark:
        "bg-slate-950 hover:bg-slate-900 text-white font-semibold shadow-sm",
      ghost:
        "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs tracking-wide",
      md: "h-11 px-5 text-sm tracking-wide",
      lg: "h-12 px-6 text-base font-semibold tracking-wide",
      icon: "h-10 w-10 p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
