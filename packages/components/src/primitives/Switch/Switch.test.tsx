import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Switch } from "./Switch";

expect.extend(toHaveNoViolations);

describe("Switch", () => {
  it("renders correctly with label", () => {
    render(<Switch label="Airplane Mode" />);
    expect(screen.getByLabelText(/airplane mode/i)).toBeInTheDocument();
  });

  it("handles toggling", async () => {
    render(<Switch label="Toggle" />);
    const switchEl = screen.getByRole("switch");
    expect(switchEl).toHaveAttribute("data-state", "unchecked");
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute("data-state", "checked");
  });

  it("is disabled when specified", () => {
    render(<Switch label="Disabled" disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("displays error message", () => {
    render(<Switch label="Error" errorMessage="Required" />);
    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Switch label="Accessible Switch" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
