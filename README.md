# Multi-framework Builder.io Example

## Description

This project demonstrates how to integrate Builder.io into a React Native app and a Next.js web app, sharing Component definitions between apps. Because React Native requires the Gen2 SDK, we are using the same SDK in both projects, even though the Gen1 SDK is usually recommended for Next.js projects. 

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- Expo CLI
- Next.js

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mix3d/multi-framework-builderio.git
    ```

2. Install dependencies for the React Native app:

    ```bash
    cd react-native
    npm install
    ```

3. Install dependencies for the Next.js web app:

    ```bash
    cd nextjs-web
    npm install
    ```

## Usage
Because the component registration is shared between platforms, you can use just the Next.js project for previewing & composing content in the visual editor, while both platforms share the same visual content. 

In both instances of `components/builder/BuilderContentComponent.tsx` (Next.js and React Native), replace the API key with your own space's. A better approach is to pull the API key out into a `.env` file, but this step was left out in favor of publishing quickly.

### Setup

In Builder, create page models with a url path of `'/'`, `'/category/category-123'`, and `'product/product-123`. Configure your pagemodel preview url to `http://localhost:3000`

Run the Next.js site and start creating content on the above page models.  

### What to look at
The main example is how to register custom components in two platforms that share the same prop structure and component definition. The excercise of turning this to a true monorepo with shared definitions is left to the reader, but the `AssumedMonoRepoSharedFile.ts` file is exactly the same between each project folder.

Components are registered when added to a Builder `<Content>` component, using the `customComponents` prop. (`<Content ... customComponents={listOfComponents}>`). Note: this is different than the explicit registration step of the Gen1 SDK.

In my example, I added the SharedButton component with url paths to each page, two on the root page pointing to each url, and one on the each path pointing to the other path. While the definition of a url is just a string on this component, it could be expanded with logic to take a Commerce plugin's categoryId or productId, and the component could conditionally structure the url depending on the data passed in. 

### Some notable Builder.io Settings to consider
* React Native styles mode
  * Removes CSS styles that are incompatible with React Native, ensuring no incompatible design items are set.
* Component-Only mode
  * Removes built-in components and only allows registered custom components in the editor.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).