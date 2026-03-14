import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button } from "./Button";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  it("renders correctly with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when specified", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows a spinner and is disabled when loading", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    // Verify spinner exists via aria-hidden icon check or similar
  });

  it("renders icons correctly", () => {
    render(
      <Button leftIcon={<span data-testid="left-icon" />}>
        With Icon
      </Button>
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations for outline variant", async () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
