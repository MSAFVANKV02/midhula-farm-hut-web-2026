"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const maxWidthClasses = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  full: "sm:max-w-[calc(100%-2rem)]",
} as const;

export interface ModalClassNames {
  content?: string;
  header?: string;
  title?: string;
  description?: string;
  body?: string;
  footer?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: keyof typeof maxWidthClasses;
  showCloseButton?: boolean;
  showFooterCloseButton?: boolean;
  /** Shortcut for styling DialogContent */
  className?: string;
  /** Granular classNames for every internal slot */
  classNames?: ModalClassNames;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  footer,
  children,
  maxWidth = "lg",
  showCloseButton = true,
  showFooterCloseButton = false,
  className,
  classNames,
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(
          "max-h-[90vh] overflow-y-auto",
          maxWidthClasses[maxWidth],
          className,
          classNames?.content
        )}
      >
        {(title || description) && (
          <DialogHeader className={classNames?.header}>
            {title && (
              <DialogTitle className={classNames?.title}>{title}</DialogTitle>
            )}
            {description && (
              <DialogDescription className={classNames?.description}>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        <div data-slot="modal-body" className={cn(classNames?.body)}>
          {children}
        </div>

        {(footer || showFooterCloseButton) && (
          <DialogFooter
            showCloseButton={showFooterCloseButton}
            className={classNames?.footer}
          >
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}