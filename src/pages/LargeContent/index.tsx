import { Divider } from 'antd';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import TestCard from '@/components/TestCard';
import { TestResult } from '@/components/TestResult';

import { useSettings } from '@/stores/settings';
import { createStyles } from 'antd-style';
import { demoPathPrefix, TestCases } from './TestCase';

const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      padding: 24px;
      min-height: 100vh;
      background: ${token.colorBgLayout};
    `,
  };
});

export default () => {
  const [runCount, setRunCount] = useState(0);
  const NUM_CARDS = useSettings((s) => s.cardNumber);
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <TestCard
        title={'单次渲染基础性能对比'}
        runCount={runCount}
        onRunCountChange={setRunCount}
        testIndex={'使用 React 的 <Profiler /> 组件统计渲染完成时间'}
        testMethod={`渲染 ${NUM_CARDS} 相同张卡片`}
        testObject={'验证相同样式的渲染逻辑在不同的样式库中的性能表现'}
      />

      {runCount > 0 && (
        <Flexbox style={{ marginTop: 12 }}>
          <Divider>测试结果</Divider>
          <TestResult
            key={runCount}
            usages={TestCases}
            pathPrefix={demoPathPrefix}
          />
        </Flexbox>
      )}
    </div>
  );
};
