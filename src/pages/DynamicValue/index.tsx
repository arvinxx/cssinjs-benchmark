import { Divider } from 'antd';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import TestCard from '@/components/TestCard';
import { TestResult } from '@/components/TestResult';

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
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <TestCard
        title={'动态变量渲染测试'}
        runCount={runCount}
        onRunCountChange={setRunCount}
        testIndex={'使用 React 的 <Profiler /> 组件统计渲染完成时间'}
        testMethod={'在一个表格中渲染不同颜色的样式'}
        testObject={'不同的样式库中，动态变量的性能表现'}
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
