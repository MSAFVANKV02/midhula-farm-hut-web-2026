import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white text-slate-900 shadow-sm overflow-hidden",
        hoverEffect &&
          "transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold tracking-tight text-slate-900", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-slate-500 mt-1 leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-3", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-6 pt-0 border-t border-slate-100 mt-auto flex items-center",
        className
      )}
      {...props}
    />
  );
}
