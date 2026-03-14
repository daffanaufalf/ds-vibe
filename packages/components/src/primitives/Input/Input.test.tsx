import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Input } from "./Input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  it("renders correctly with label", () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
  });

  it("handles value changes", async () => {
    const handleChange = vi.fn();
    render(<Input label="Name" onChange={handleChange} />);
    const input = screen.getByLabelText(/name/i);
    await userEvent.type(input, "John");
    expect(input).toHaveValue("John");
    expect(handleChange).toHaveBeenCalled();
  });

  it("displays error message and sets aria-invalid", () => {
    render(<Input label="Email" errorMessage="Invalid email" />);
    const input = screen.getByLabelText(/email/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it("links helper text via aria-describedby", () => {
    render(<Input label="Zip" helperText="5 digits" id="zip-input" />);
    const input = screen.getByLabelText(/zip/i);
    expect(input).toHaveAttribute("aria-describedby", "zip-input-helper");
    expect(screen.getByText(/5 digits/i)).toHaveAttribute("id", "zip-input-helper");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText(/disabled/i)).toBeDisabled();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Input label="Accessible" placeholder="Type here" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations in error state", async () => {
    const { container } = render(<Input label="Error" errorMessage="Required field" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
