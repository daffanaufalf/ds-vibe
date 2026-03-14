import React from "react";
import { type VariantProps } from "class-variance-authority";
import type { textVariants } from "./Text";

/**
 * Props for the Text component.
 * Supports polymorphic 'as' prop to render different HTML elements.
 */
export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  /**
   * The element to render the text as.
   * @default "p"
   */
  as?: React.ElementType;
}

/**
 * Props for the Heading component.
 */
export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  /**
   * level of the heading.
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
