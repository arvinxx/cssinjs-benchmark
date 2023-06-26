import { PlayCircleOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions } from 'antd';
import { FC, useCallback } from 'react';

interface TestCardProps {
  runCount: number;
  onRunCountChange: (nextRunCount: number) => void;
  title: string;
  testMethod: string;
  testIndex: string;
  testObject: string;
}

const TestCard: FC<TestCardProps> = ({
  runCount,
  onRunCountChange,
  testMethod,
  testObject,
  testIndex,
  title,
}) => {
  const onClickRun = useCallback(() => {
    let nextRunCount = runCount + 1;
    onRunCountChange(-1);
    setTimeout(() => {
      onRunCountChange(nextRunCount);
    }, 100);
  }, [runCount]);

  return (
    <Card
      title={title}
      extra={
        <Button
          type={'primary'}
          icon={<PlayCircleOutlined />}
          onClick={onClickRun}
          loading={runCount === -1}
        >
          {runCount > 0 ? '重新运行' : '运行测试'}
        </Button>
      }
    >
      <Descriptions layout={'vertical'}>
        <Descriptions.Item label={'测试方式'}>{testMethod}</Descriptions.Item>
        <Descriptions.Item label={'统计指标'}>{testIndex}</Descriptions.Item>
        <Descriptions.Item label={'测试目的'}>{testObject}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default TestCard;
