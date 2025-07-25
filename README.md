# UI Component Library

A modern React UI component library built with TypeScript and Tailwind CSS v4.

## Installation

```bash
npm install @durgarao310/ui-components
```

## Setup

### Option 1: Auto-Import (Recommended)
The CSS is automatically imported when you import any component:

```tsx
import { Button, Input } from '@durgarao310/ui-components';
// CSS is automatically included!

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="Enter your email" />
    </div>
  );
}
```

### Option 2: Manual CSS Import
If you prefer explicit imports or need to import CSS separately:

```tsx
// Import CSS first
import '@durgarao310/ui-components/styles';

// Then import components
import { Button, Input } from '@durgarao310/ui-components';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="Enter your email" />
    </div>
  );
}
```

### CSS-in-JS/Bundler Import
```javascript
// In your main CSS file or index.js
import '@durgarao310/ui-components/styles';
```

## Theme System

This library includes a comprehensive theme system with:

- **Modern Color System**: Uses `oklch()` color space for better consistency
- **Dark Mode Support**: Automatic dark mode with `.dark` class
- **Comprehensive Variables**: Colors for cards, popovers, charts, sidebar, etc.
- **Flexible Design Tokens**: Multiple radius options (sm, md, lg, xl)

### Available CSS Variables

```css
/* Light mode variables */
:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(14.5% 0 0);
  --primary: oklch(20.5% 0 0);
  --primary-foreground: oklch(98.5% 0 0);
  /* ... and many more */
}

/* Dark mode variables */
.dark {
  --background: oklch(14.5% 0 0);
  --foreground: oklch(98.5% 0 0);
  /* ... automatically applied */
}
```

## Components

### Button
- **Variants**: primary, secondary, outline, ghost
- **Sizes**: sm, md, lg

### Input
- Support for labels, error states, and helper text

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Lint code
npm run lint
```

## License

MIT
