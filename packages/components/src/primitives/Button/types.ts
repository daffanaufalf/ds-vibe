import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button";

/**
 * Props for the Button component.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, shows a loading spinner and disables the button.
   */
  loading?: boolean;
  /**
   * Optional text to show when in loading state.
   */
  loadingText?: string;
  /**
   * Icon to display before the button text.
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the button text.
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
}
