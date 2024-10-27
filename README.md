# Plora UI Layer

Extendable Nuxt layer for Plora UI, developed by Xploratech. This layer is built on top of [Nuxt](https://nuxtjs.org/) and [Nuxt UI](https://ui.nuxt.com/).

## Setup

NOTE: Whether you are first or second method, you must install the [@nuxt/ui](https://ui.nuxt.com/getting-started/installation) module in your project. Because this layer is built on top of Nuxt UI, it requires the Nuxt UI module to be installed in your project.

You can add this layer to your project with 2 methods:

### 1. Git Repository

You can use this layer with a git repository. Add the following to your [nuxt.config.js](https://nuxt.com/docs/guide/going-further/layers#git-repository)

```js
export default defineNuxtConfig({
  extends: [
    "github:xplorationtechnology/plora-ui-layer", // GitHub Remote Source
    "github:xplorationtechnology/plora-ui-layer/base", // GitHub Remote Source within /base directory
    "github:xplorationtechnology/plora-ui-layer#dev", // GitHub Remote Source from dev branch
    "github:xplorationtechnology/plora-ui-layer#v1.0.0", // GitHub Remote Source from v1.0.0 tag
    "gitlab:xplorationtechnology/plora-ui-layer", // GitLab Remote Source example
    "bitbucket:xplorationtechnology/plora-ui-layer", // Bitbucket Remote Source example
  ]
});
```

### 2. NPM Package (Recommended)

You can use this layer as an npm package. Add the following to your [nuxt.config.js](https://nuxt.com/docs/guide/going-further/layers#npm-package)

```js
export default defineNuxtConfig({
  extends: [
    "plora-ui-layer",
  ]
});
```

Make sure to install the package first as a dev dependency:

```bash
pnpm add -D plora-ui-layer # pnpm
```

```bash
{
  devDependencies: {
    "plora-ui-layer": "^1.0.0"
  }
}
```

## Features

- **Base Components from Nuxt UI**

  A collection of UI components to build your application.

- **Components Kit**

  A collection of custom components to build your application which are built on top of Nuxt UI components.

- **Layouts**

  A collection of layouts to build your application.

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create a pull request with your recommended changes.

### Credits

- [Nuxt UI](https://ui.nuxt.com/)

## License

Lisenced under the [MIT License](LICENSE).
