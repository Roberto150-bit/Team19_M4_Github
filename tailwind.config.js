/**
 * Tailwind CSS (Play CDN) theme extension — Quinnelle University design tokens.
 *
 * Load order in each HTML page:
 *   1. <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
 *   2. This file (assigns global `tailwind.config`)
 *   3. styles.css (custom CSS that complements utilities)
 *
 * This single config merges the token sets used across all pages so utilities
 * like `bg-primary-container` and `text-on-tertiary-container` work everywhere.
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        secondary: '#b51a1e',
        'tertiary-container': '#6c2400',
        'error-container': '#ffdad6',
        'on-secondary-fixed': '#410003',
        'on-primary-fixed-variant': '#8a1924',
        'on-primary-fixed': '#410007',
        'primary-fixed': '#ffdad8',
        'surface-container-lowest': '#ffffff',
        'on-primary-container': '#ff7f80',
        background: '#fdf8f7',
        'on-surface': '#1c1b1b',
        'surface-container-highest': '#e6e1e0',
        primary: '#54000c',
        'on-error-container': '#93000a',
        'on-tertiary-container': '#ff834d',
        error: '#ba1a1a',
        tertiary: '#481600',
        'on-primary': '#ffffff',
        'on-secondary-fixed-variant': '#93000e',
        'surface-dim': '#ddd9d8',
        'tertiary-fixed-dim': '#ffb598',
        'inverse-surface': '#313030',
        'secondary-fixed-dim': '#ffb4ac',
        'primary-container': '#7a0b1a',
        'surface-variant': '#e6e1e0',
        'on-secondary-container': '#fffbff',
        'surface-container-low': '#f7f2f1',
        'surface-container-high': '#ece7e6',
        'on-background': '#1c1b1b',
        'outline-variant': '#dfbfbe',
        'on-tertiary-fixed-variant': '#7e2c00',
        'on-error': '#ffffff',
        'inverse-on-surface': '#f4f0ef',
        surface: '#fdf8f7',
        'surface-bright': '#fdf8f7',
        'secondary-container': '#d93633',
        outline: '#8b7170',
        'tertiary-fixed': '#ffdbce',
        'on-secondary': '#ffffff',
        'inverse-primary': '#ffb3b1',
        'on-tertiary-fixed': '#370e00',
        'surface-tint': '#ab3239',
        'on-surface-variant': '#584140',
        'secondary-fixed': '#ffdad6',
        'primary-fixed-dim': '#ffb3b1',
        'surface-container': '#f2edec',
        'on-tertiary': '#ffffff',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        label: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
};
