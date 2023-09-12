import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				app: resolve(__dirname, "index.html"),
				treesIframe: resolve(__dirname, "modules/iframeTrees.html"),
				historyIframe: resolve(__dirname, "modules/iframeHistory.html"),
			},
		},
	},
});
