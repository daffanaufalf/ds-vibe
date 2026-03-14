import React, { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "@ds/utils";
import { Text } from "../Typography";
import type { CheckboxProps } from "./types";

/**
 * Checkbox variants using design tokens.
 */
export const checkboxVariants = cva(
  "peer h-5 w-5 shrink-0 rounded-sm border border-[var(--ds-color-neutral-300)] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-interactive-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--ds-interactive-primary)] data-[state=checked]:border-[var(--ds-interactive-primary)] data-[state=checked]:text-[var(--ds-text-inverse)] transition-colors",
  {
    variants: {
      error: {
        true: "border-[var(--ds-feedback-error)] focus-visible:ring-[var(--ds-feedback-error)]",
      },
    },
  }
);

/**
 * An accessible Checkbox component powered by Radix UI.
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, helperText, errorMessage, id: providedId, disabled, required, ...props }, ref) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start gap-2">
        <CheckboxPrimitive.Root
          id={id}
          ref={ref}
          disabled={disabled}
          required={required}
          className={cn(checkboxVariants({ error: hasError }), className)}
          aria-describedby={hasError ? errorId : (helperText ? helperId : undefined)}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            <Check className="h-4 w-4" strokeWidth={3} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-0.5",
              disabled && "text-[var(--ds-color-neutral-400)]"
            )}
          >
            {label}
            {required && <span className="ml-1 text-[var(--ds-feedback-error)]" aria-hidden="true">*</span>}
          </label>
        )}
      </div>

      {errorMessage && (
        <Text id={errorId} variant="caption" color="error" className="ml-7">
          {errorMessage}
        </Text>
      )}

      {!errorMessage && helperText && (
        <Text id={helperId} variant="caption" color="secondary" className="ml-7">
          {helperText}
        </Text>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";
