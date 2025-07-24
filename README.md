# UI Component Library

A modern React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @durgarao310/ui-components
```

## Usage

```tsx
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
