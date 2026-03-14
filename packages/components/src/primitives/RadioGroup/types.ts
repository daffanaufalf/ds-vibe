import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

/**
 * Props for the Radio Group component.
 */
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /**
   * The label for the entire group.
   */
  label?: string;
  /**
   * Helper text displayed below the group.
   */
  helperText?: string;
  /**
   * Error message displayed below the group.
   */
  errorMessage?: string;
  /**
   * Orientation of the radio items.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * Props for individual Radio Group items.
 */
export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /**
   * Label for the individual radio item.
   */
  label?: string;
}
