import { defineConfig } from '@umijs/max';

// ref: https://umijs.org/config/
export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/dynamic-value',
      component: '@/pages/DynamicValue',
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
