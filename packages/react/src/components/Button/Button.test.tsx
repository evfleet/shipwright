import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Button from "./Button";

describe("Button", () => {
  it("should render successfully", () => {
    const wrapper = render(<Button />);
    expect(wrapper).toBeTruthy();
  });

  it("should have no accessibility issues", async () => {
    const wrapper = render(<Button />);
    const results = await axe(wrapper.container);
    expect(results).toHaveNoViolations();
  });
});
