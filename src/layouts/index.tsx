import { useOutlet } from '@umijs/max';
import { App } from 'antd';

import Header from './Header';

export default () => {
  const outlet = useOutlet();

  return (
    <App>
      <Header />

      {outlet}
    </App>
  );
};
