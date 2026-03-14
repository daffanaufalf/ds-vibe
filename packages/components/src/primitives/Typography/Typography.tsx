import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@ds/utils";
import type { TextProps, HeadingProps } from "./types";

/**
 * Text and Heading variants mapping to typography design tokens.
 */
export const textVariants = cva("m-0 transition-colors", {
  variants: {
    variant: {
      h1: "text-[var(--ds-font-size-5xl)] font-[var(--ds-font-weight-bold)] leading-[var(--ds-font-line-tight)] tracking-[var(--ds-font-letter-tight)]",
      h2: "text-[var(--ds-font-size-4xl)] font-[var(--ds-font-weight-bold)] leading-[var(--ds-font-line-tight)]",
      h3: "text-[var(--ds-font-size-3xl)] font-[var(--ds-font-weight-semibold)] leading-[var(--ds-font-line-tight)]",
      h4: "text-[var(--ds-font-size-2xl)] font-[var(--ds-font-weight-semibold)] leading-[var(--ds-font-line-snug)]",
      h5: "text-[var(--ds-font-size-xl)] font-[var(--ds-font-weight-semibold)] leading-[var(--ds-font-line-snug)]",
      h6: "text-[var(--ds-font-size-lg)] font-[var(--ds-font-weight-semibold)] leading-[var(--ds-font-line-snug)]",
      bodyLarge: "text-[var(--ds-font-size-lg)] font-[var(--ds-font-weight-normal)] leading-[var(--ds-font-line-relaxed)]",
      body: "text-[var(--ds-font-size-base)] font-[var(--ds-font-weight-normal)] leading-[var(--ds-font-line-normal)]",
      bodySmall: "text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-normal)] leading-[var(--ds-font-line-normal)]",
      caption: "text-[var(--ds-font-size-xs)] font-[var(--ds-font-weight-normal)] leading-[var(--ds-font-line-normal)]",
      label: "text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] leading-none",
    },
    color: {
      default: "text-[var(--ds-text-primary)]",
      secondary: "text-[var(--ds-text-secondary)]",
      inverse: "text-[var(--ds-text-inverse)]",
      error: "text-[var(--ds-feedback-error)]",
      interactive: "text-[var(--ds-interactive-primary)]",
    },
    weight: {
      light: "font-[var(--ds-font-weight-light)]",
      normal: "font-[var(--ds-font-weight-normal)]",
      medium: "font-[var(--ds-font-weight-medium)]",
      semibold: "font-[var(--ds-font-weight-semibold)]",
      bold: "font-[var(--ds-font-weight-bold)]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
  },
});

/**
 * Text component for body, content, and secondary textual elements.
 * Polymorphic component that defaults to <p>.
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Component = "p", variant, color, weight, align, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, color, weight, align, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

/**
 * Heading component for titles and headers.
 * Semantic headings h1-h6.
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = "h2", variant, color, weight, align, className, ...props }, ref) => {
    const headingVariant = variant || (Component as any);
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant: headingVariant, color, weight, align, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";
