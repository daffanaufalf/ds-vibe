import React from "react";
import { cn } from "@ds/utils";

/**
 * Common layout props for Box, Stack, and Grid.
 */
export interface LayoutProps {
  /**
   * Padding based on spacing tokens.
   */
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  px?: string | number;
  py?: string | number;
  /**
   * Margin based on spacing tokens.
   */
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  mx?: string | number;
  my?: string | number;
  /**
   * Border radius.
   */
  borderRadius?: string;
  /**
   * Shadow / Elevation.
   */
  shadow?: string;
}

/**
 * Props for the Box component.
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement>, LayoutProps {
  /**
   * The element to render the box as.
   * @default "div"
   */
  as?: React.ElementType;
}

/**
 * Props for the Stack component.
 */
export interface StackProps extends BoxProps {
  /**
   * Flex direction.
   * @default "column"
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  /**
   * Spacing between children based on tokens.
   */
  gap?: string | number;
  /**
   * Align items.
   */
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  /**
   * Justify content.
   */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /**
   * If true, allows children to wrap.
   */
  wrap?: boolean;
}

/**
 * Props for the Grid component.
 */
export interface GridProps extends BoxProps {
  /**
   * Grid template columns.
   */
  cols?: string | number;
  /**
   * Grid template rows.
   */
  rows?: string | number;
  /**
   * Spacing between children based on tokens.
   */
  gap?: string | number;
  /**
   * Align items.
   */
  align?: "start" | "center" | "end" | "stretch";
  /**
   * Justify items.
   */
  justify?: "start" | "center" | "end" | "stretch";
}
