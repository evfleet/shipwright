import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";

import "../src/index.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			Light: "Light",
			Dark: "Dark",
		},
		defaultTheme: "Light",
		attributeName: "data-mode",
	}),
];

export default preview;
