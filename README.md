# DS-Vibe Design System

A high-performance, accessible, and token-driven design system built with React, Tailwind CSS, and Radix UI.

## Prerequisites

- **Node.js**: 18.x or higher
- **pnpm** atau **Yarn**: Untuk manajemen monorepo.

## Quick Start

### 1. Install Dependencies

Gunakan salah satu:

```bash
pnpm install
# atau
yarn install
```

This will install all dependencies for the monorepo and generate the necessary lockfile.

### 2. Generate Design Tokens

```bash
npm run generate:tokens
# atau
yarn generate:tokens
```

### 3. Run Storybook

```bash
npm run storybook
# atau
yarn storybook
```

### 4. Running Tests

```bash
npm run test
# atau
yarn test
```

## Project Structure

- `apps/storybook`: Storybook configuration and global doc pages.
- `packages/tokens`: Design token definitions and generation scripts.
- `packages/components`: React components (Primitives & Layout).
- `packages/utils`: Shared utilities (Tailwind merge, etc.).

## Tech Stack

- **Framework**: React 18 / TypeScript
- **Styling**: Tailwind CSS
- **Primitives**: Radix UI
- **Monorepo**: Turborepo
- **Testing**: Vitest / React Testing Library / Axe-core

---

Built with ⚡ by Antigravity.
