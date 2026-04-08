# @stackline/react-loading

> A maintained React wrapper for **@stackline/loading** with declarative components, container overlays, a fullscreen-ready hook, and versioned demos for React 17, 18, and 19.

[![npm version](https://img.shields.io/npm/v/@stackline/react-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-loading)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/react-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-loading)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/react-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-loading)
[![license](https://img.shields.io/npm/l/@stackline/react-loading.svg?style=flat-square)](https://github.com/alexandroit/react-loading/blob/main/LICENSE)
[![React 19](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/react-loading.svg?style=flat-square)](https://github.com/alexandroit/react-loading/stargazers)

**[Documentation & Live Demos](https://alexandroit.github.io/react-loading/)** | **[npm](https://www.npmjs.com/package/@stackline/react-loading)** | **[Issues](https://github.com/alexandroit/react-loading/issues)** | **[Repository](https://github.com/alexandroit/react-loading)**

**Latest version:** `19.0.0`

---

> **Built on top of:** [@stackline/loading](https://www.npmjs.com/package/@stackline/loading), the framework-agnostic Stackline loading toolkit with modern variants, delay and minimum visible duration handling, accessibility defaults, and themeable CSS variables.

---

## Why this library?

`@stackline/react-loading` keeps the full Stackline loading engine intact while adapting it to modern React applications.

It gives React teams three practical integration paths:

- `<Loading />` when the loader itself is what the component should render
- `<LoadingOverlay />` when an existing card, table, modal, chart shell, or button should become busy
- `useLoadingController()` when the loading state is fullscreen, route-level, or fully programmatic

The wrapper stays intentionally thin so the real behavior continues to live in the core package:

- polished loading variants from `@stackline/loading`
- delay and `minVisible` anti-flicker behavior
- inline, overlay, container, and fullscreen modes
- accessibility defaults and optional labels
- versioned docs for React 17, 18, and 19

## Features

| Feature | Supported |
| :--- | :---: |
| Declarative React loading component | ✅ |
| Container overlay wrapper | ✅ |
| Fullscreen and imperative hook | ✅ |
| Same loader variants as the core package | ✅ |
| Delay and minimum visible duration support | ✅ |
| Card, table, modal, upload, chart, and button patterns | ✅ |
| Versioned demos for React 17, 18, and 19 | ✅ |
| Full access to the core loading helpers and tokens | ✅ |

## Table of Contents

1. [React Version Compatibility](#react-version-compatibility)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Usage Patterns](#usage-patterns)
5. [API Overview](#api-overview)
6. [Run Locally](#run-locally)
7. [License](#license)

## React Version Compatibility

Each package family only installs on its matching React family. Framework major and package major are not always the same package number, so use the package family column below.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **19.x** | **React 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.0 -> 19.2.5** | [React 19 family docs](https://alexandroit.github.io/react-loading/react-19/) |
| **18.x** | **React 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.0 -> 18.3.1** | [React 18 family docs](https://alexandroit.github.io/react-loading/react-18/) |
| **17.x** | **React 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.0 -> 17.0.2** | [React 17 family docs](https://alexandroit.github.io/react-loading/react-17/) |


## Installation

```bash
npm install @stackline/react-loading
```

Choose the package family from the compatibility table above. Each published family is locked to one framework major only.

## Quick Start

### Basic loader

```tsx
import { Loading } from '@stackline/react-loading';

export function LoadingPreview() {
  return (
    <Loading
      visible
      options={{
        variant: 'orbit',
        size: 56,
        centered: true,
        label: 'Loading dashboard'
      }}
      style={{ minHeight: 180 }}
    />
  );
}
```

### Overlay an existing surface

```tsx
import { LoadingOverlay } from '@stackline/react-loading';

export function RevenueCard({ isLoading }: { isLoading: boolean }) {
  return (
    <LoadingOverlay
      visible={isLoading}
      options={{
        overlay: true,
        centered: true,
        variant: 'glass-spinner',
        label: 'Loading revenue card'
      }}
    >
      <section className="card-shell">...</section>
    </LoadingOverlay>
  );
}
```

## Usage Patterns

### `<Loading />`

Use `<Loading />` when the loader itself is the thing being rendered.

### `<LoadingOverlay />`

Use `<LoadingOverlay />` for:

- cards
- tables
- dashboards
- buttons
- modal bodies
- chart shells
- upload zones

### `useLoadingController()`

Use the hook when you need fullscreen or document-level control:

```tsx
import { useLoadingController } from '@stackline/react-loading';

export function WorkspaceAction() {
  const loading = useLoadingController();

  async function showLoader() {
    const instance = await loading.show(document.body, {
      fullscreen: true,
      overlay: true,
      centered: true,
      variant: 'galaxy',
      label: 'Loading workspace'
    });

    window.setTimeout(() => {
      void instance.hide();
    }, 1200);
  }

  return <button onClick={showLoader}>Show fullscreen loader</button>;
}
```

## API Overview

### `<Loading />`

Props:

- `visible`
- `options`
- standard `div` props such as `className` and `style`
- `onCreate`
- `onShown`
- `onHidden`
- `onUpdated`
- `onDestroyed`

Ref methods:

- `getInstance()`
- `show()`
- `hide()`
- `toggle(force?)`
- `update(options)`
- `destroy()`

### `<LoadingOverlay />`

Props:

- `visible`
- `options`
- `children`
- standard `div` props such as `className` and `style`
- `onCreate`
- `onShown`
- `onHidden`
- `onUpdated`
- `onDestroyed`

### `useLoadingController()`

Methods:

- `create(target?, options?)`
- `mount(target?, options?)`
- `show(target?, options?)`
- `hide()`
- `toggle(force?)`
- `update(options)`
- `destroy()`
- `getInstance()`

### Core re-exports

The wrapper also re-exports core helpers such as:

- `createLoader`
- `showLoader`
- `hideLoader`
- `mountLoader`
- `loaderVariants`
- `getVariantDefinition`
- `applyThemeTokens`
- `lightTheme`
- `darkTheme`

## Run Locally

```bash
npm install
npm run typecheck
npm run build
npm run docs:install:react-17
npm run docs:install:react-18
npm run docs:install:react-19
npm run build:docs
```

## License

MIT
