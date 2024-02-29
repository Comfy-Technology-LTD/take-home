module.exports = {
  content: [
    '../../packages/uicore/src/components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx}',
    './*.{html,js,ts,jsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgb(var(--okw-color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--okw-color-secondary) / <alpha-value>)',
      success: 'rgb(var(--okw-color-success) / <alpha-value>)',
      error: 'rgb(var(--okw-color-error) / <alpha-value>)',
      disabled: 'rgb(var(--okw-color-disabled) / <alpha-value>)',
    },
    gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#1f2937',
        800: '#111827',
        900: '#030712',
      },
   extend: {
      borderRadius: {
        "lg": "30px",
        "md": "20px",
        "sm": "15px",
        "vsm": "10px"
      }
    }
  },
  plugins: []
}
