"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabOption {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pills" | "underline";
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  className,
  variant = "pills",
}: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex items-center gap-2 overflow-x-auto no-scrollbar py-1",
        variant === "underline" && "border-b border-slate-200",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        if (variant === "underline") {
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap",
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-bold",
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap select-none",
              isActive
                ? "bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {typeof tab.count === "number" && (
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-md font-bold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-600"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
