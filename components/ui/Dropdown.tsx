"use client";

import { useDismiss } from "@/hooks/useDismiss";
import { useId, useRef } from "react";

type DropdownProps = {
  /** Trigger content — text, an icon, or both. */
  trigger: React.ReactNode;
  /**
   * Accessible name for the trigger. Required when `trigger` is icon-only,
   * otherwise the button announces as unlabelled.
   */
  triggerLabel?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
};

export default function Dropdown({
  trigger,
  triggerLabel,
  children,
  isOpen,
  onOpenChange,
  className = "",
  triggerClassName = "",
  panelClassName = "",
}: DropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = `dropdown-${useId().replace(/:/g, "")}`;

  useDismiss(containerRef, () => onOpenChange(false), isOpen);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={triggerLabel}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        onClick={() => onOpenChange(!isOpen)}
        className={`gap-xs inline-flex cursor-pointer items-center ${triggerClassName}`}
      >
        {trigger}
      </button>

      {isOpen && (
        <div id={panelId} className={`absolute ${panelClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}
