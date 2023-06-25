import { useOutlet } from '@umijs/max';
import { App } from 'antd';

import { createStyles } from 'antd-style';
import Header from './Header';

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
  const outlet = useOutlet();
  const { styles } = useStyles();
  return (
    <App>
      <Header />

      <div className={styles.container}>{outlet}</div>
    </App>
  );
};
