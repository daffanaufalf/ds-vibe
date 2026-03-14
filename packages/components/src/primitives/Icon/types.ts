import React from "react";
import * as LucideIcons from "lucide-react";

/**
 * Props for the Icon component.
 */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Name of the icon from lucide-react.
   */
  name: keyof typeof LucideIcons;
  /**
   * Size of the icon. Can be a number (px) or a token-based size.
   * @default 24
   */
  size?: number | string;
  /**
   * Color of the icon.
   * @default "currentColor"
   */
  color?: string;
}
