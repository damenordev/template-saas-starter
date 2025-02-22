# Payment UI Design System

## Overview
The payment interface follows a consistent design system using Tailwind CSS variables for theming and accessibility. The design prioritizes user experience with clear visual hierarchy and proper color contrast, while leveraging React Server Components (RSC) and Server Actions for optimal performance and security.

## Theme Variables
The payment UI uses the following theme variables from the Tailwind configuration:

```css
--background: Base background color
--foreground: Primary text color
--card: Card background color
--card-foreground: Card text color
--muted: Muted background color
--muted-foreground: Muted text color
--border: Border color
```

## Layout Structure
- **AppHeader**: Consistent navigation header with theme toggle and user actions
- **Main Content**: Centered container with responsive padding
- **Payment Card**: Elevated card component with proper spacing and border

## Typography
- Headings: Use `text-foreground` for main titles
- Body text: Use `text-muted-foreground` for secondary content
- Font sizes follow a consistent scale (text-lg, text-3xl, text-4xl)

## Color Contrast
The theme ensures WCAG 2.1 compliance with:
- Clear contrast between background and text colors
- Distinct card elements against the page background
- Proper emphasis for interactive elements

## Components
### Payment Form
```jsx
<div className="bg-card text-card-foreground shadow-lg rounded-lg border">
  <div className="p-8">
    <PaymentForm />
  </div>
</div>
```

### Page Layout
```jsx
<div className="min-h-screen bg-background">
  <AppHeader title="Payment" />
  <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </main>
</div>
```

## Best Practices
1. Use semantic HTML elements for better accessibility
2. Maintain consistent spacing using the spacing scale
3. Follow the color system for visual hierarchy
4. Ensure responsive design at all breakpoints
5. Use proper loading states for async operations