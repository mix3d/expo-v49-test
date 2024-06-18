# Multi-framework Builder.io Example

## Description

This project demonstrates how to integrate Builder.io into a React Native app and a Next.js web app, sharing Component definitions between apps.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- Expo CLI
- Next.js

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mix3d/multi-framework-builder.git
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
Because the component registration is shared between platforms, you can use just the Next.js project for previewing & composing content in the visual editor, while both platforms share the content. 

### Some notable Builder.io Settings to consider:
* React Native styles mode
  * Removes CSS styles that are incompatible with React Native, ensuring no incompatible design items are set.
* Component-Only mode
  * Removes built-in components and only allows registered custom components in the editor.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).