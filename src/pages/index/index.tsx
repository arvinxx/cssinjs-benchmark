import { App } from 'antd';
import { useState } from 'react';

import LargeContent from '../LargeContent';
import ReRender from '../ReRender';
import Header from './Header';

export default () => {
  const [mode, setMode] = useState('largeContent');

  return (
    <App>
      <Header mode={mode} onModeChange={setMode} />

      {mode === 'largeContent' ? <LargeContent /> : <ReRender />}
    </App>
  );
};
