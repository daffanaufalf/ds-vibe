import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@ds/utils";
import type { IconProps } from "./types";

/**
 * Icon component that wraps lucide-react icons.
 * Standardizes icon usage with design tokens support.
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color = "currentColor", className, ...props }, ref) => {
    const LucideIcon = LucideIcons[name] as React.ElementType;

    if (!LucideIcon) {
      console.warn(`Icon "${name}" does not exist in lucide-react.`);
      return null;
    }

    return (
      <LucideIcon
        ref={ref}
        size={size}
        color={color}
        className={cn("shrink-0", className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
