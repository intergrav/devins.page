import { defineConfig } from "astro/config";
import { createCssVariablesTheme } from "shiki/core";
import sitemap from "@astrojs/sitemap";

const cssVariablesTheme = createCssVariablesTheme({
	name: "css-variables",
	variablePrefix: "--shiki-",
});

export default defineConfig({
	site: "https://devins.page",
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: cssVariablesTheme,
		},
	},
});
