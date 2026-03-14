import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Icon } from "./Icon";

expect.extend(toHaveNoViolations);

describe("Icon", () => {
  it("renders the correct icon", () => {
    const { container } = render(<Icon name="User" data-testid="user-icon" />);
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("applies size and color", () => {
    const { container } = render(<Icon name="Mail" size={32} color="red" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
    expect(svg).toHaveAttribute("stroke", "red");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Icon name="Check" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
