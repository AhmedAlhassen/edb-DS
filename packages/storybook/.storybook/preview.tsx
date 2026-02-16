import type { Preview } from '@storybook/react';
import '@edb/ui/styles.css';
import { DirectionProvider, ThemeProvider } from '@edb/ui';

const preview: Preview = {
  globalTypes: {
    theme: { toolbar: { title: 'Theme', items: ['light', 'dark'] } },
    direction: { toolbar: { title: 'Direction', items: ['ltr', 'rtl'] } },
    locale: { toolbar: { title: 'Locale', items: ['EN', 'AR'] } },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider defaultTheme={context.globals.theme}>
        <DirectionProvider defaultDir={context.globals.direction}>
          <div dir={context.globals.direction} data-theme={context.globals.theme} style={{ padding: 16 }}>
            <Story />
          </div>
        </DirectionProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;
