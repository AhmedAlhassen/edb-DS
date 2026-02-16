import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'EDB Design System',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'edb',
  projectName: 'design-system',
  presets: [['classic', { docs: { sidebarPath: require.resolve('./sidebars.ts') }, theme: { customCss: require.resolve('./src/css/custom.css') } }]],
  themeConfig: { navbar: { title: 'EDB Design System' } },
};

export default config;
