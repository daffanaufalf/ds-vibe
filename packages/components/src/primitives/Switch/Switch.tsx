import React, { useId } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@ds/utils";
import { Text } from "../Typography";
import type { SwitchProps } from "./types";

/**
 * An accessible Switch (toggle) component powered by Radix UI.
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, helperText, errorMessage, id: providedId, disabled, required, ...props }, ref) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col gap-1.5 w-max">
      <div className="flex items-center gap-3">
        <SwitchPrimitive.Root
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-interactive-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--ds-interactive-primary)] data-[state=unchecked]:bg-[var(--ds-color-neutral-300)]",
            hasError && "data-[state=unchecked]:border-[var(--ds-feedback-error)]",
            className
          )}
          id={id}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-describedby={hasError ? errorId : (helperText ? helperId : undefined)}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-[var(--ds-text-inverse)] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            )}
          />
        </SwitchPrimitive.Root>
        
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
              disabled && "text-[var(--ds-color-neutral-400)]"
            )}
          >
            {label}
            {required && <span className="ml-1 text-[var(--ds-feedback-error)]" aria-hidden="true">*</span>}
          </label>
        )}
      </div>

      {errorMessage && (
        <Text id={errorId} variant="caption" color="error">
          {errorMessage}
        </Text>
      )}

      {!errorMessage && helperText && (
        <Text id={helperId} variant="caption" color="secondary">
          {helperText}
        </Text>
      )}
    </div>
  );
});

Switch.displayName = "Switch";
