import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail, Search, Lock, User } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder text",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    helperText: "Use a unique username for your profile.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "short",
    errorMessage: "Password must be at least 8 characters.",
  },
};

export const SuccessState: Story = {
  args: {
    label: "Referral Code",
    defaultValue: "PROMO2024",
    successMessage: "Referral code applied successfully!",
  },
};

export const WithPrefix: Story = {
  args: {
    label: "Search",
    placeholder: "Search components...",
    prefix: <Search size={16} />,
  },
};

export const WithSuffix: Story = {
  args: {
    label: "Email",
    placeholder: "user",
    suffix: <span className="text-xs font-semibold">@company.com</span>,
  },
};

export const LoginField: Story = {
  args: {
    label: "User ID",
    placeholder: "Enter ID",
    prefix: <User size={16} />,
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    prefix: <Lock size={16} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: "Full Name",
    placeholder: "John Doe",
    isFullWidth: true,
  },
};
