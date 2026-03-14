import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Mail, ArrowRight, Trash2 } from "lucide-react";
import { expect, within, userEvent } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Solid Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Item",
    leftIcon: <Trash2 size={16} />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading State",
  },
};

export const LoadingWithText: Story = {
  args: {
    loading: true,
    loadingText: "Please wait...",
    children: "Click me",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Mail size={16} />,
    children: "Email Us",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRight size={16} />,
    children: "Get Started",
  },
};

export const FullWidth: Story = {
  args: {
    isFullWidth: true,
    children: "Full Width Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
