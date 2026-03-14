import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Checkbox } from "./Checkbox";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  it("renders correctly with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
  });

  it("handles checked state change", async () => {
    render(<Checkbox label="Toggle me" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("is disabled when specified", () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("displays error message", () => {
    render(<Checkbox label="Error" errorMessage="Required" />);
    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Checkbox label="Accessible" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
