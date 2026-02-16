module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        edb: {
          bg: 'var(--edb-color-bg)',
          surface: 'var(--edb-color-surface)',
          text: 'var(--edb-color-text)',
          border: 'var(--edb-color-border)',
          primary: 'var(--edb-color-primary)',
          success: 'var(--edb-color-success)',
          warning: 'var(--edb-color-warning)',
          error: 'var(--edb-color-error)'
        }
      }
    }
  }
};
