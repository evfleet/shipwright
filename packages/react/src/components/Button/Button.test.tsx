import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Button from "./Button";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });

  it("should have no accessibility issues", async () => {
    const { container } = render(<Button />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
