import { App } from 'antd';
import { useState } from 'react';

import LargeContent from '../LargeContent';
import DynamicValue from '../DynamicValue';
import Header from './Header';

export default () => {
  const [mode, setMode] = useState('largeContent');

  return (
    <App>
      <Header mode={mode} onModeChange={setMode} />

      {mode === 'largeContent' ? <LargeContent /> : <DynamicValue />}
    </App>
  );
};
