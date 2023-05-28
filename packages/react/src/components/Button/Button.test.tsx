import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
	it("should render", () => {
		const wrapper = render(<Button />);
		const button = wrapper.container.querySelector("button");

		expect(button).toBeTruthy();
	});
});
