import { GithubFilled } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { memo, type FC } from 'react';

const GithubButton: FC = () => {
  return (
    <Tooltip arrow={false} title={'Github'}>
      <a
        href={'https://github.com/arvinxx/cssinjs-benchmark'}
        target={'_blank'}
        rel="noreferrer"
      >
        <Button icon={<GithubFilled />} />
      </a>
    </Tooltip>
  );
};

export default memo(GithubButton);
