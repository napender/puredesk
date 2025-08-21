/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'accent-primary': 'var(--accent-primary)',
        'text-primary': 'var(--text-primary)',
        'gray-subtle': 'var(--gray-subtle)',
        'bg-card': 'var(--bg-card)',
        'border-light': 'var(--border-light)',
        'text-secondary': 'var(--text-secondary)',
        'hover-bg': 'var(--hover-bg)',
        'success': 'var(--success)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
        'info': 'var(--info)',
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
