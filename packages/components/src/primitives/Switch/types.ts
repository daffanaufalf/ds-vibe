import * as SwitchPrimitive from "@radix-ui/react-switch";

/**
 * Props for the Switch component.
 */
export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * Label for the switch.
   */
  label?: string;
  /**
   * Helper text displayed below the switch.
   */
  helperText?: string;
  /**
   * Error message displayed below the switch.
   */
  errorMessage?: string;
}
