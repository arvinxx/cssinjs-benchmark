import { repoBaseUrl } from '@/const';
import { Usage } from '@/types/testCase';

import AntdStyleFunc from './AntdStyleFunc';
import AntdStyleProps from './AntdStyleProps';
import AntdStyleStatic from './AntdStyleStatic';

import EmotionCSS from './EmotionCSS';
import EmotionReact from './EmotionReact';
import EmotionStyled from './EmotionStyled';
import EmotionStyledProps from './EmotionStyledProps';

import PureReact from './React';

import StyledComponents from './StyledComponents';
import StyledComponentsProps from './StyledComponentsProps';

export const demoPathPrefix = `${repoBaseUrl}/src/pages/DynamicValue/TestCase`;

export const TestCases: Usage[] = [
  {
    name: 'Pure Style',
    cases: [
      {
        name: 'CSS Modules',
        component: PureReact,
        path: '/CSSModules/index.tsx',
      },
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
        path: '/EmotionStyled/index.tsx',
      },
      {
        name: 'Emotion Styled Props',
        component: EmotionStyledProps,
        path: '/EmotionStyledProps/index.tsx',
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
      {
        name: 'StyledComponents Props',
        component: StyledComponentsProps,
        path: '/StyledComponentsProps/index.tsx',
      },
    ],
  },
];
