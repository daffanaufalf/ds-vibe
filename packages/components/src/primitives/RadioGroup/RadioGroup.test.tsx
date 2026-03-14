import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

expect.extend(toHaveNoViolations);

describe("RadioGroup", () => {
  it("renders correctly with group label", () => {
    render(
      <RadioGroup label="Options">
        <RadioGroupItem value="1" label="One" />
        <RadioGroupItem value="2" label="Two" />
      </RadioGroup>
    );
    expect(screen.getByText("Options")).toBeInTheDocument();
    expect(screen.getByLabelText("One")).toBeInTheDocument();
  });

  it("handles selection changes", async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1" label="One" />
        <RadioGroupItem value="2" label="Two" />
      </RadioGroup>
    );
    
    const radioTwo = screen.getByLabelText("Two");
    expect(radioTwo).toHaveAttribute("data-state", "unchecked");
    
    await userEvent.click(radioTwo);
    expect(radioTwo).toHaveAttribute("data-state", "checked");
  });

  it("supports keyboard navigation", async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1" label="One" />
        <RadioGroupItem value="2" label="Two" />
      </RadioGroup>
    );
    
    const radioOne = screen.getByLabelText("One");
    const radioTwo = screen.getByLabelText("Two");
    
    radioOne.focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(radioTwo).toHaveAttribute("data-state", "checked");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <RadioGroup label="Test Group">
        <RadioGroupItem value="1" label="Label 1" />
        <RadioGroupItem value="2" label="Label 2" />
      </RadioGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
