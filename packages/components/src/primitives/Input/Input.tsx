import React, { useId } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@ds/utils";
import type { InputProps } from "./types";

/**
 * Input variants and sizes using design tokens.
 */
export const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-[var(--ds-color-neutral-300)] bg-[var(--ds-color-neutral-50)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--ds-color-neutral-400)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-interactive-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
      error: {
        true: "border-[var(--ds-feedback-error)] focus-visible:ring-[var(--ds-feedback-error)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

/**
 * Input component with support for labels, validation states, and icons.
 * Follows WCAG 2.1 AA accessibility guidelines.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      successMessage,
      prefix,
      suffix,
      isFullWidth,
      size,
      required,
      id: providedId,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const hasError = !!errorMessage;

    return (
      <div className={cn("flex flex-col gap-1.5", isFullWidth ? "w-full" : "w-80", className)}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--ds-color-neutral-900)] flex items-center gap-1"
          >
            {label}
            {required && <span className="text-[var(--ds-feedback-error)]" aria-hidden="true">*</span>}
          </label>
        )}
        
        <div className="relative flex items-center">
          {prefix && (
            <div className="absolute left-3 flex items-center pointer-events-none text-[var(--ds-color-neutral-400)]">
              {prefix}
            </div>
          )}
          
          <input
            id={id}
            ref={ref}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : (helperText ? helperId : undefined)}
            className={cn(
              inputVariants({ size, error: hasError }),
              prefix && "pl-10",
              suffix && "pr-10"
            )}
            {...props}
          />
          
          {suffix && (
            <div className="absolute right-3 flex items-center pointer-events-none text-[var(--ds-color-neutral-400)]">
              {suffix}
            </div>
          )}
        </div>

        {errorMessage && (
          <p id={errorId} className="text-xs text-[var(--ds-feedback-error)] font-medium">
            {errorMessage}
          </p>
        )}
        
        {!errorMessage && successMessage && (
          <p className="text-xs text-[var(--ds-feedback-success)] font-medium">
            {successMessage}
          </p>
        )}

        {!errorMessage && !successMessage && helperText && (
          <p id={helperId} className="text-xs text-[var(--ds-color-neutral-500)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
