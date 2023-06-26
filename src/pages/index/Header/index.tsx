import { Segmented, Typography } from 'antd';
import { memo, type FC } from 'react';
import { Flexbox } from 'react-layout-kit';

import GithubButton from './GithubButton';

import { useStyle } from './style';

interface HeaderProps {
  mode: string;
  onModeChange: (mode: string) => void;
}
const Header: FC<HeaderProps> = ({ mode, onModeChange }) => {
  const { styles } = useStyle();

  return (
    <div className={styles.header}>
      <Flexbox
        horizontal
        distribution={'space-between'}
        align={'center'}
        width={'auto'}
        className={styles.content}
      >
        <Flexbox horizontal>
          <Typography.Text strong style={{ fontSize: 16 }}>
            CSSinJS Benchmark
          </Typography.Text>
        </Flexbox>

        <Segmented
          value={mode}
          onChange={onModeChange}
          options={[
            { label: 'Basic 测试', value: 'largeContent' },
            { label: 'ReRender 测试', value: 'reRender' },
          ]}
        />

        <GithubButton />
      </Flexbox>
    </div>
  );
};

export default memo(Header);
