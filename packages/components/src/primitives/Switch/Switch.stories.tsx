import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Always on",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Airplane mode",
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Dark Mode",
    helperText: "Adjust the interface to reduce eye strain.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Strict Mode",
    errorMessage: "This setting is mandatory for this environment.",
    required: true,
  },
};
