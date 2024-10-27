# Plora UI Layer

An extendable Nuxt layer designed for Plora UI, created by Xploratech. Built on top of [Nuxt](https://nuxtjs.org/) and [Nuxt UI](https://ui.nuxt.com/), this layer streamlines development for a more efficient, modular UI experience.

## Setup

**Note**: Before adding this layer, ensure you have the [@nuxt/ui](https://ui.nuxt.com/getting-started/installation) module installed in your project, as Plora UI Layer requires it as a base dependency.

To integrate Plora UI Layer, choose one of the following methods:

### 1. Using a Git Repository

To add this layer from a Git repository, include the following configuration in your [nuxt.config.js](https://nuxt.com/docs/guide/going-further/layers#git-repository):

```javascript
export default defineNuxtConfig({
  extends: [
    "github:xplorationtechnology/plora-ui-layer", // GitHub repository
    "github:xplorationtechnology/plora-ui-layer/base", // GitHub repository with /base directory
    "github:xplorationtechnology/plora-ui-layer#dev", // GitHub dev branch
    "github:xplorationtechnology/plora-ui-layer#v1.0.0", // Specific version tag v1.0.0
    "gitlab:xplorationtechnology/plora-ui-layer", // Example for GitLab
    "bitbucket:xplorationtechnology/plora-ui-layer" // Example for Bitbucket
  ]
});
```

### 2. Using NPM Package (Recommended)

The recommended integration method is via NPM. To add this layer as a package, configure [nuxt.config.js](https://nuxt.com/docs/guide/going-further/layers#npm-package) as follows:

```javascript
export default defineNuxtConfig({
  extends: [
    "plora-ui-layer"
  ]
});
```

First, install the package as a development dependency:

```bash
pnpm add -D plora-ui-layer
```

Or, update your package.json dependencies:

```json
{
  "devDependencies": {
    "plora-ui-layer": "^1.0.0"
  }
}
```

## Features

- **Core Components from Nuxt UI**
  Access a foundational set of UI components, designed to accelerate application development.

- **Component Kit**
  A library of custom components built on top of Nuxt UI to provide a more comprehensive toolkit.

- **Layout Library**
  Includes a variety of layouts, allowing for rapid application structuring and a consistent user experience.

## Contributing

Contributions are highly appreciated! If you’d like to help improve Plora UI Layer, please submit a pull request with your proposed changes.

## Acknowledgements

Special thanks to [Nuxt UI](https://ui.nuxt.com/) for providing foundational components and support.

## License

This project is licensed under the [MIT License](LICENSE).
