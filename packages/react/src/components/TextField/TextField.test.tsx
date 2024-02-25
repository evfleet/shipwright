import { render } from "@testing-library/react";

import { TextField } from "./TextField";

describe("TextField", () => {
  it("should render successfully", () => {
    const wrapper = render(<TextField name="test" label="Test" />);
    expect(wrapper).toBeTruthy();
  });
});
