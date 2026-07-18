import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{js,ts,jsx,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'] }, colors: { ink: '#172033', coral: '#ed6954', paper: '#f8f8f6' }, boxShadow: { soft: '0 12px 38px rgba(24, 35, 54, .10)' } } }, plugins: [] } satisfies Config;
