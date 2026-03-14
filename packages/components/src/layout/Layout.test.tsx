import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Box, Stack, Grid } from "./Layout";

describe("Layout Components", () => {
  describe("Box", () => {
    it("renders as a div by default", () => {
      const { container } = render(<Box>Content</Box>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("supports polymorphic 'as' prop", () => {
      const { container } = render(<Box as="section">Content</Box>);
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    it("applies inline styles for spacing tokens", () => {
      const { container } = render(<Box p="var(--ds-spacing-4)">Content</Box>);
      expect(container.firstChild).toHaveStyle({ padding: "var(--ds-spacing-4)" });
    });
  });

  describe("Stack", () => {
    it("renders as a flex container", () => {
      const { container } = render(<Stack>Content</Stack>);
      expect(container.firstChild).toHaveClass("flex");
      expect(container.firstChild).toHaveClass("flex-col");
    });

    it("applies alignment classes", () => {
      const { container } = render(<Stack align="center" justify="between">Content</Stack>);
      expect(container.firstChild).toHaveClass("items-center");
      expect(container.firstChild).toHaveClass("justify-between");
    });
  });

  describe("Grid", () => {
    it("renders as a grid container", () => {
      const { container } = render(<Grid cols={3}>Content</Grid>);
      expect(container.firstChild).toHaveClass("grid");
      expect(container.firstChild).toHaveStyle({ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" });
    });
  });
});
