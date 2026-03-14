import React from "react";
import { cn } from "@ds/utils";
import type { BoxProps, StackProps, GridProps } from "./types";

/**
 * Foundational Box component for spacing and basic layout.
 */
export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = "div", className, p, pt, pb, pl, pr, px, py, m, mt, mb, ml, mr, mx, my, borderRadius, shadow, style, ...props }, ref) => {
    // Helper to generate dynamic styles for spacing if numeric, otherwise use as class?
    // In DS-Vibe, we aim for zero hardcoding, so we'll map common numbers to our 4px scale locally if needed,
    // or assume the user passes token variables like 'var(--ds-spacing-4)'.
    
    return (
      <Component
        ref={ref}
        className={cn(className)}
        style={{
          padding: p,
          paddingTop: pt,
          paddingBottom: pb,
          paddingLeft: pl,
          paddingRight: pr,
          paddingInline: px,
          paddingBlock: py,
          margin: m,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          marginInline: mx,
          marginBlock: my,
          borderRadius,
          boxShadow: shadow,
          ...style,
        }}
        {...props}
      />
    );
  }
);
Box.displayName = "Box";

/**
 * Stack component for flexible linear layouts.
 */
export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ direction = "column", gap, align, justify, wrap, className, style, ...props }, ref) => {
    const alignMap = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    };

    const justifyMap = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    return (
      <Box
        ref={ref}
        className={cn(
          "flex",
          direction === "row" && "flex-row",
          direction === "column" && "flex-col",
          direction === "row-reverse" && "flex-row-reverse",
          direction === "column-reverse" && "flex-col-reverse",
          align && alignMap[align],
          justify && justifyMap[justify],
          wrap && "flex-wrap",
          className
        )}
        style={{ gap, ...style }}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

/**
 * Grid component for two-dimensional layouts.
 */
export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ cols, rows, gap, align, justify, className, style, ...props }, ref) => {
    const alignMap = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };

    const justifyMap = {
      start: "justify-items-start",
      center: "justify-items-center",
      end: "justify-items-end",
      stretch: "justify-items-stretch",
    };

    return (
      <Box
        ref={ref}
        className={cn(
          "grid",
          align && alignMap[align],
          justify && justifyMap[justify],
          className
        )}
        style={{
          gridTemplateColumns: typeof cols === "number" ? `repeat(${cols}, minmax(0, 1fr))` : cols,
          gridTemplateRows: typeof rows === "number" ? `repeat(${rows}, minmax(0, 1fr))` : rows,
          gap,
          ...style
        }}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";
