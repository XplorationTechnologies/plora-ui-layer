export default defineAppConfig({
  myLayer: {
    name: "Hello from PloraUI Layer!",
  },
  ui: {
    primary: "lemon",
    gray: "shark",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
