import { Segmented, Typography } from 'antd';
import { memo, type FC } from 'react';
import { Flexbox } from 'react-layout-kit';

import GithubButton from './GithubButton';

import { useStyle } from './style';

const Header: FC = () => {
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
        <Flexbox horizontal className={styles.left}>
          <Typography.Text strong style={{ fontSize: 16 }}>
            CSSinJS Benchmark
          </Typography.Text>
        </Flexbox>

        <Segmented
          options={[
            { label: 'Large Content 测试', value: 'largeContent' },
            { label: 'ReRender 测试', value: 'rerender' },
          ]}
        />

        <GithubButton />
      </Flexbox>
    </div>
  );
};

export default memo(Header);
