import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Primitives/RadioGroup",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option-one" label="Option One" />
      <RadioGroupItem value="option-two" label="Option Two" />
    </RadioGroup>
  ),
  args: {
    defaultValue: "option-one",
    label: "Select an option",
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="sm" label="Small" />
      <RadioGroupItem value="md" label="Medium" />
      <RadioGroupItem value="lg" label="Large" />
    </RadioGroup>
  ),
  args: {
    orientation: "horizontal",
    label: "T-Shirt Size",
    defaultValue: "md",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="apple" label="Apple" />
      <RadioGroupItem value="orange" label="Orange" disabled />
      <RadioGroupItem value="banana" label="Banana" />
    </RadioGroup>
  ),
  args: {
    label: "Favorite Fruit",
    defaultValue: "apple",
  },
};

export const GroupDisabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="credit" label="Credit Card" />
      <RadioGroupItem value="paypal" label="PayPal" />
    </RadioGroup>
  ),
  args: {
    label: "Payment Method",
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="yes" label="Yes" />
      <RadioGroupItem value="no" label="No" />
    </RadioGroup>
  ),
  args: {
    label: "Accept Terms?",
    errorMessage: "Please make a selection.",
    required: true,
  },
};
