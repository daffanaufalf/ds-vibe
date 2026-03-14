import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Always checked",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Newsletter",
    helperText: "Get the latest updates in your inbox.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Required checkbox",
    errorMessage: "You must accept the terms.",
    required: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Select all",
    checked: "indeterminate",
  },
};
