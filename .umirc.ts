import { defineConfig } from '@umijs/max';

// ref: https://umijs.org/config/
export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  mfsu: false,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
