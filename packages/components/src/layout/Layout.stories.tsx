import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Grid } from "./Layout";
import { Text } from "../primitives/Typography";

const meta: Meta<typeof Box> = {
  title: "Layout/Box & Stack",
  component: Box,
};

export default meta;

export const BoxExample: StoryObj = {
  render: () => (
    <Box
      p="var(--ds-spacing-8)"
      borderRadius="var(--ds-radius-lg)"
      shadow="var(--ds-shadow-md)"
      className="bg-[var(--ds-color-blue-50)] border border-[var(--ds-color-blue-200)]"
    >
      <Text>This is a Box with custom padding, radius, and shadow using tokens.</Text>
    </Box>
  ),
};

export const StackExample: StoryObj = {
  render: () => (
    <Stack gap="var(--ds-spacing-4)" className="p-4 border rounded">
      <Box className="bg-blue-100 p-2 text-center">Item 1</Box>
      <Box className="bg-blue-200 p-2 text-center">Item 2</Box>
      <Box className="bg-blue-300 p-2 text-center">Item 3</Box>
    </Stack>
  ),
};

export const RowStack: StoryObj = {
  render: () => (
    <Stack direction="row" gap="var(--ds-spacing-2)" align="center" className="p-4 border rounded">
      <Box className="bg-green-100 p-2">Horizontal 1</Box>
      <Box className="bg-green-200 p-2">Horizontal 2</Box>
      <Box className="bg-green-300 p-2">Horizontal 3</Box>
    </Stack>
  ),
};

export const GridExample: StoryObj = {
  render: () => (
    <Grid cols={3} gap="var(--ds-spacing-4)" className="p-4 border rounded">
      <Box className="bg-purple-100 p-8 text-center">1</Box>
      <Box className="bg-purple-200 p-8 text-center">2</Box>
      <Box className="bg-purple-300 p-8 text-center">3</Box>
      <Box className="bg-purple-400 p-8 text-center">4</Box>
      <Box className="bg-purple-500 p-8 text-center">5</Box>
      <Box className="bg-purple-600 p-8 text-center">6</Box>
    </Grid>
  ),
};
