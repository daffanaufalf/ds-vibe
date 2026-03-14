import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Primitives/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: ["User", "Mail", "Search", "Settings", "Bell", "Check", "X", "Info", "AlertTriangle"],
    },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "User",
    size: 24,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="Heart" color="red" />
      <Icon name="Star" color="gold" />
      <Icon name="Shield" color="blue" />
      <Icon name="Zap" color="orange" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Settings" size={16} />
      <Icon name="Settings" size={24} />
      <Icon name="Settings" size={32} />
      <Icon name="Settings" size={48} />
    </div>
  ),
};
