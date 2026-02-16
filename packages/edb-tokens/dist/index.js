export const tokens = {
    colors: {
        primary: { 500: '#1D4ED8', 700: '#1E40AF', 800: '#1E3A8A' },
        neutral: { 50: '#F8FAFC', 100: '#F1F5F9', 300: '#CBD5E1', 600: '#475569', 900: '#0F172A' },
        success: '#16A34A',
        warning: '#D97706',
        error: '#DC2626',
    },
    typography: {
        body: 'Inter, system-ui, sans-serif',
        arabic: '"Noto Sans Arabic", system-ui, sans-serif',
    },
    spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, '2xl': 32 },
    radius: { sm: 6, md: 10, lg: 14, pill: 9999 },
    elevation: {
        sm: '0 1px 2px rgb(15 23 42 / 0.08)',
        md: '0 8px 24px rgb(15 23 42 / 0.12)',
    },
    motion: {
        durations: { fast: '120ms', normal: '200ms', slow: '320ms' },
        easings: { standard: 'cubic-bezier(0.2, 0, 0, 1)' },
    },
};
export const semanticLight = {
    bg: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    border: '#cbd5e1',
    primary: '#1d4ed8',
    success: '#16a34a',
    warning: '#d97706',
    error: '#dc2626',
    focusRing: '#1d4ed8',
    overlay: 'rgb(15 23 42 / 0.55)',
    link: '#1e40af',
};
export const semanticDark = {
    bg: '#020617',
    surface: '#0f172a',
    text: '#f8fafc',
    border: '#334155',
    primary: '#60a5fa',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    focusRing: '#93c5fd',
    overlay: 'rgb(2 6 23 / 0.68)',
    link: '#93c5fd',
};
//# sourceMappingURL=index.js.map