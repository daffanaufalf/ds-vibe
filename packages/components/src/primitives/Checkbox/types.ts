import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps } from "class-variance-authority";
import type { checkboxVariants } from "./Checkbox";

/**
 * Props for the Checkbox component.
 */
export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  /**
   * The label for the checkbox.
   */
  label?: string;
  /**
   * Helper text displayed below the checkbox.
   */
  helperText?: string;
  /**
   * Error message displayed below the checkbox.
   */
  errorMessage?: string;
}
