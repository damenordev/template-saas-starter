# UI Component Library Documentation

## Purpose
- Document UI component patterns to enable consistent AI-driven interface development
- Enable automated component integration and styling modifications
- Prevent design system inconsistencies during component updates

## Target Audience
- **Primary AI**: Cursor, GitHub Copilot
- **Secondary AI**: UI testing and accessibility validation tools

## Required Sections

### Context Map
- **Related Files**:
  - `src/ui/*`: Core UI components
  - `src/components/*`: Application-specific components
  - `src/styles/*`: Global styles and utilities
  - `tailwind.config.ts`: Tailwind configuration

- **Dependencies**:
  - `@radix-ui/react-*`: ^1.0.0
  - `tailwindcss`: ^3.3.0
  - `class-variance-authority`: ^0.7.0

### Component Patterns

#### Button Component
```typescript
// File: src/ui/button.tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className })
      )}
      ref={ref}
      {...props}
    />
  )
})
```

#### Form Component Integration
```typescript
// File: src/components/auth/login-form.tsx
export function LoginForm() {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

### Modification Rules

1. **Adding New Component Variants**:
```typescript
// 1. Define variants in component file
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      }
    }
  }
)

// 2. Update types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof buttonVariants>["variant"]
}
```

2. **Styling Guidelines**:
   - Use Tailwind utility classes
   - Follow design token system in `tailwind.config.ts`
   - Maintain dark mode compatibility
   - Ensure responsive design patterns

### Common Errors

1. **Invalid Component Props**:
```typescript
// ❌ Incorrect
<Button variant="custom" />

// ✅ Correct
<Button variant="default" />
```

2. **Missing Accessibility Attributes**:
```typescript
// ❌ Incorrect
<Dialog.Trigger>
  <button>Open</button>
</Dialog.Trigger>

// ✅ Correct
<Dialog.Trigger asChild>
  <Button aria-label="Open dialog">Open</Button>
</Dialog.Trigger>
```

## AI-Specific Metadata

### Tags
#ui-components #shadcn #radix #tailwind #accessibility

### File Fingerprints
- Button Component: `export const buttonVariants = cva(`
- Form Component: `export function Form`
- Dialog Component: `export const Dialog = DialogPrimitive.Root`

### Related Documentation
- `tailwind.config.ts`: Theme configuration
- `globals.css`: Global styles
- `cn.styles.ts`: Utility functions

## Version Compatibility
- React: 18.x
- Radix UI: ^1.0.0
- Tailwind CSS: ^3.3.0
- TypeScript: ^5.0.0

## Maintenance Rules
1. Update component examples when adding new variants
2. Maintain accessibility documentation
3. Keep prop type definitions synchronized
4. Document responsive behavior patterns