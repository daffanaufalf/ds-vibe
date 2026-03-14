import type { Meta, StoryObj } from "@storybook/react";
import { Text, Heading } from "./Typography";

const meta: Meta<typeof Text> = {
  title: "Primitives/Typography",
  component: Text,
};

export default meta;

export const TextScale: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Text variant="bodyLarge">Body Large: The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="body">Body (Default): The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="bodySmall">Body Small: The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="caption">Caption: The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="label">Label: Field Label</Text>
    </div>
  ),
};

export const Headings: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  ),
};

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text color="default">Default Text Color</Text>
      <Text color="secondary">Secondary Text Color</Text>
      <Text color="interactive">Interactive Text Color</Text>
      <Text color="error">Error Text Color</Text>
      <div className="bg-slate-900 p-4 rounded">
        <Text color="inverse">Inverse Text Color (Dark Background)</Text>
      </div>
    </div>
  ),
};

export const Weights: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text weight="light">Light Weight</Text>
      <Text weight="normal">Normal Weight (Default)</Text>
      <Text weight="medium">Medium Weight</Text>
      <Text weight="semibold">Semibold Weight</Text>
      <Text weight="bold">Bold Weight</Text>
    </div>
  ),
};
