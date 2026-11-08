"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  badge?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
  badge,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200",
        isOpen && "border-blue-300 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-slate-900 transition-colors hover:text-blue-600 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          {title}
          {badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {badge}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0",
            isOpen && "rotate-180 text-blue-600"
          )}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-3", className)}>{children}</div>;
}
