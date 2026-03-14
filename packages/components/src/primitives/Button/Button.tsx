import React from "react";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@ds/utils";
import type { ButtonProps } from "./types";

/**
 * Button variants and sizes defined using class-variance-authority.
 * Uses design tokens via CSS variables for consistency.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
  {
    variants: {
      variant: {
        solid: "bg-[var(--ds-interactive-primary)] text-[var(--ds-text-inverse)] hover:bg-[var(--ds-interactive-primaryHover)] active:bg-[var(--ds-interactive-primaryPressed)]",
        outline: "border border-[var(--ds-interactive-primary)] bg-transparent text-[var(--ds-interactive-primary)] hover:bg-[var(--ds-color-blue-50)] dark:hover:bg-[var(--ds-color-neutral-800)]",
        ghost: "bg-transparent text-[var(--ds-interactive-primary)] hover:bg-[var(--ds-color-blue-50)] dark:hover:bg-[var(--ds-color-neutral-800)]",
        link: "bg-transparent text-[var(--ds-interactive-primary)] underline-offset-4 hover:underline p-0 h-auto",
        destructive: "bg-[var(--ds-feedback-error)] text-[var(--ds-text-inverse)] hover:opacity-90 active:opacity-100",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base",
      },
      isFullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

/**
 * A highly customizable Button component driven by design tokens.
 * Compliant with WCAG 2.1 AA accessibility standards.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isFullWidth,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size, isFullWidth, className }))}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {loadingText || children}
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
