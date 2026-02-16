export declare const tokens: {
    readonly colors: {
        readonly primary: {
            readonly 500: "#1D4ED8";
            readonly 700: "#1E40AF";
            readonly 800: "#1E3A8A";
        };
        readonly neutral: {
            readonly 50: "#F8FAFC";
            readonly 100: "#F1F5F9";
            readonly 300: "#CBD5E1";
            readonly 600: "#475569";
            readonly 900: "#0F172A";
        };
        readonly success: "#16A34A";
        readonly warning: "#D97706";
        readonly error: "#DC2626";
    };
    readonly typography: {
        readonly body: "Inter, system-ui, sans-serif";
        readonly arabic: "\"Noto Sans Arabic\", system-ui, sans-serif";
    };
    readonly spacing: {
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly xl: 24;
        readonly '2xl': 32;
    };
    readonly radius: {
        readonly sm: 6;
        readonly md: 10;
        readonly lg: 14;
        readonly pill: 9999;
    };
    readonly elevation: {
        readonly sm: "0 1px 2px rgb(15 23 42 / 0.08)";
        readonly md: "0 8px 24px rgb(15 23 42 / 0.12)";
    };
    readonly motion: {
        readonly durations: {
            readonly fast: "120ms";
            readonly normal: "200ms";
            readonly slow: "320ms";
        };
        readonly easings: {
            readonly standard: "cubic-bezier(0.2, 0, 0, 1)";
        };
    };
};
export declare const semanticLight: {
    readonly bg: "#ffffff";
    readonly surface: "#f8fafc";
    readonly text: "#0f172a";
    readonly border: "#cbd5e1";
    readonly primary: "#1d4ed8";
    readonly success: "#16a34a";
    readonly warning: "#d97706";
    readonly error: "#dc2626";
    readonly focusRing: "#1d4ed8";
    readonly overlay: "rgb(15 23 42 / 0.55)";
    readonly link: "#1e40af";
};
export declare const semanticDark: {
    readonly bg: "#020617";
    readonly surface: "#0f172a";
    readonly text: "#f8fafc";
    readonly border: "#334155";
    readonly primary: "#60a5fa";
    readonly success: "#4ade80";
    readonly warning: "#fbbf24";
    readonly error: "#f87171";
    readonly focusRing: "#93c5fd";
    readonly overlay: "rgb(2 6 23 / 0.68)";
    readonly link: "#93c5fd";
};
export type Tokens = typeof tokens;
//# sourceMappingURL=index.d.ts.map