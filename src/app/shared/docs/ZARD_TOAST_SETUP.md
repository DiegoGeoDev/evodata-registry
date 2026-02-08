# Zard UI Toast Setup Instructions

## 1. Update app.ts

```ts
// ... existing imports
import { ZardToastComponent } from '@/shared/components/toast/toast.component';

@Component({
  // ... existing component metadata
  imports: [
    // ... your existing imports
    ZardToastComponent
  ],
  template: `
    // ... your existing template content
    <z-toaster />
  `,
})
// ... existing component class
```
