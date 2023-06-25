import { FC } from 'react';

import { useSettings } from '@/stores/settings';
import './styles.css';

const PureCss: FC = () => {
  const NUM_CARDS = useSettings((s) => s.cardNumber);

  return (
    <div className="container">
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className="card-container" key={i}>
          Card {i}
          <div className="item-one" />
          <div className="item-two" />
          <div className="item-three" />
          <div className="item-four" />
          <div className="item-five" />
          <div className="item-six" />
          <div className="item-seven" />
        </div>
      ))}
    </div>
  );
};

export default PureCss;
