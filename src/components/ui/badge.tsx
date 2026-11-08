import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "red" | "dark" | "slate" | "outline" | "emerald";
  pulse?: boolean;
}

export function Badge({
  className,
  variant = "blue",
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    blue: "bg-blue-50 text-blue-700 border-blue-200/80",
    red: "bg-red-50 text-red-700 border-red-200/80",
    dark: "bg-slate-900 text-white border-slate-800",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-white text-slate-700 border-slate-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              variant === "red" ? "bg-red-500" : "bg-blue-500"
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              variant === "red" ? "bg-red-600" : "bg-blue-600"
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
