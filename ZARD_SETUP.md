# Zard UI Setup Instructions

## 1. Add Provider to app.config.ts

Import and add the `provideZard()` provider to your application configuration:

```typescript
import { provideZard } from '@/shared/core/provider/providezard';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... your other providers
    provideZard(),
  ],
};
```

## 2. Add Styles to styles.css

The `styles.css` file included contains:

- Tailwind CSS configuration
- CSS custom properties for theming (light/dark mode)
- Base styles for the design system

Make sure to:

1. Install required dependencies:

   ```bash
   npm install -D tailwindcss-animate
   ```

2. Copy the content from the provided `styles.css` to your project's `src/styles.css`

## 3. Dependencies

The Zard setup requires these npm packages:

- `class-variance-authority` - For variant styling
- `clsx` - For conditional classes
- `tailwind-merge` - For merging Tailwind classes
- `lucide-angular` - For icons
- `tailwindcss` - CSS framework
- `tailwindcss-animate` - Animation utilities

Install them with:

```bash
npm install class-variance-authority clsx tailwind-merge lucide-angular
npm install -D tailwindcss tailwindcss-animate
```

## What does provideZard() do?

The `provideZard()` provider adds Angular event manager plugins that enable:

- `.prevent` - Prevents default event behavior
- `.stop` - Stops event propagation
- `.stop-immediate` - Stops immediate propagation
- `.prevent-with-stop` - Prevents default and stops propagation

Example usage in templates:

```html
<button (click.prevent)="handleClick()">Click me</button>
<input (keydown.enter.prevent)="submitForm()" />
```
