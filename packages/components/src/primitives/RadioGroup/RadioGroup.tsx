import React, { useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@ds/utils";
import { Text } from "../Typography";
import type { RadioGroupProps, RadioGroupItemProps } from "./types";

/**
 * An accessible Radio Group component powered by Radix UI.
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, label, helperText, errorMessage, orientation = "vertical", children, ...props }, ref) => {
  const generatedId = useId();
  const titleId = `${generatedId}-title`;
  const helperId = `${generatedId}-helper`;
  const errorId = `${generatedId}-error`;
  const hasError = !!errorMessage;

  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col gap-3", className)}
      orientation={orientation}
      aria-labelledby={label ? titleId : undefined}
      aria-describedby={hasError ? errorId : (helperText ? helperId : undefined)}
      ref={ref}
      {...props}
    >
      {label && (
        <Text id={titleId} variant="label" className="mb-1">
          {label}
        </Text>
      )}
      
      <div className={cn("flex gap-2", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap gap-4")}>
        {children}
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
    </RadioGroupPrimitive.Root>
  );
});

RadioGroup.displayName = "RadioGroup";

/**
 * Individual Radio Item within a group.
 */
export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, id: providedId, ...props }, ref) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <div className="flex items-center gap-2">
      <RadioGroupPrimitive.Item
        id={id}
        ref={ref}
        className={cn(
          "aspect-square h-5 w-5 rounded-full border border-[var(--ds-color-neutral-300)] text-[var(--ds-text-inverse)] ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-interactive-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[var(--ds-interactive-primary)] data-[state=checked]:bg-[var(--ds-interactive-primary)] transition-colors",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
});

RadioGroupItem.displayName = "RadioGroupItem";
