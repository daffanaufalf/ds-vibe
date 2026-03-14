import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Text, Heading } from "./Typography";

expect.extend(toHaveNoViolations);

describe("Typography", () => {
  describe("Text", () => {
    it("renders as a paragraph by default", () => {
      const { container } = render(<Text>Hello World</Text>);
      expect(container.querySelector("p")).toBeInTheDocument();
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("supports polymorphic 'as' prop", () => {
      const { container } = render(<Text as="span">Span Text</Text>);
      expect(container.querySelector("span")).toBeInTheDocument();
    });

    it("applies color and align variants", () => {
      const { container } = render(<Text color="error" align="center">Error Center</Text>);
      expect(container.firstChild).toHaveClass("text-[var(--ds-feedback-error)]");
      expect(container.firstChild).toHaveClass("text-center");
    });
  });

  describe("Heading", () => {
    it("renders as h2 by default", () => {
      const { container } = render(<Heading>Section Title</Heading>);
      expect(container.querySelector("h2")).toBeInTheDocument();
    });

    it("supports semantic levels h1-h6", () => {
      const { container } = render(<Heading as="h1">Page Title</Heading>);
      expect(container.querySelector("h1")).toBeInTheDocument();
    });
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <Heading as="h1">Title</Heading>
        <Text>Content</Text>
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
