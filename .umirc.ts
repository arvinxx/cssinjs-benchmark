import { defineConfig } from '@umijs/max';

// ref: https://umijs.org/config/
export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/re-render',
      component: '@/pages/ReRender',
    },
    {
      path: '/large-content',
      component: '@/pages/LargeContent',
    },
  ],
  mfsu: false,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
