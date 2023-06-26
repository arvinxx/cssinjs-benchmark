import { Usage } from '@/types/testCase';

import AntdStyleFunc from './AntdStyleFunc';
import AntdStyleProps from './AntdStyleProps';
import AntdStyleStatic from './AntdStyleStatic';

import EmotionCSS from './EmotionCSS';
import EmotionReact from './EmotionReact';
import EmotionStyled from './EmotionStyled';

import PureReact from './React';
import StyledComponents from './StyledComponents';

export const demoPathPrefix =
  'https://github.com/arvinxx/cssinjs-benchmark/tree/master/src/pages/LargeContent/TestCase';

export const TestCases: Usage[] = [
  {
    name: 'Pure React',
    cases: [
      { name: 'Pure React', component: PureReact, path: '/React/index.tsx' },
    ],
  },
  {
    name: 'antd-style',
    cases: [
      {
        name: 'createStyles Static',
        component: AntdStyleStatic,
        path: '/AntdStyleStatic/index.tsx',
      },
      {
        name: 'createStyles Function',
        component: AntdStyleFunc,
        path: '/AntdStyleFunc/index.tsx',
      },
      {
        name: 'createStyles Props',
        component: AntdStyleProps,
        path: '/AntdStyleProps/index.tsx',
      },
    ],
  },
  {
    name: 'Emotion',
    cases: [
      {
        name: 'Emotion CSS',
        component: EmotionCSS,
        path: '/EmotionCSS/index.tsx',
      },
      {
        name: 'Emotion Styled',
        component: EmotionStyled,
        path: '/EmotionCSS/index.tsx',
      },
      {
        name: 'Emotion React CSS',
        component: EmotionReact,
        path: '/EmotionReact/index.tsx',
      },
    ],
  },
  {
    name: 'StyledComponents',
    cases: [
      {
        name: 'StyledComponents',
        component: StyledComponents,
        path: '/StyledComponents/index.tsx',
      },
    ],
  },
];
