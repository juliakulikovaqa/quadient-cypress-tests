import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("after:screenshot", (details) => {
        console.log(`Screenshot saved: ${details.path}`);
      });
    },
    screenshotOnRunFailure: false,
    screenshotsFolder: "cypress/screenshots",
    video: false,
    videosFolder: "cypress/videos",
  },
});
