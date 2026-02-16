# Theming

`ThemeProvider` sets `data-theme` and persists choice to localStorage after mount.

```tsx
<ThemeProvider defaultTheme="light">
  <ThemeToggle />
</ThemeProvider>
```

Tokens are CSS variables in `:root` and `[data-theme="dark"]`.
