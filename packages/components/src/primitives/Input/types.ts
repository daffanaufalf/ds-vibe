import React from "react";
import { type VariantProps } from "class-variance-authority";
import type { inputVariants } from "./Input";

/**
 * Props for the Input component.
 */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * The label for the input.
   */
  label?: string;
  /**
   * Helper text displayed below the input.
   */
  helperText?: string;
  /**
   * Error message displayed below the input. Takes precedence over helperText.
   */
  errorMessage?: string;
  /**
   * Success message displayed below the input.
   */
  successMessage?: string;
  /**
   * Icon or element to display at the start of the input.
   */
  prefix?: React.ReactNode;
  /**
   * Icon or element to display at the end of the input.
   */
  suffix?: React.ReactNode;
  /**
   * If true, the input will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * If true, displays the input in a required state.
   */
  required?: boolean;
}
