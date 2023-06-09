import { FC } from 'react';

import { useSettings } from '@/stores/settings';
// @ts-ignore
import styles from './styles.module.css';

const PureCss: FC = () => {
  const NUM_CARDS = useSettings((s) => s.cardNumber);

  return (
    <div className={styles.container}>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={styles.card} key={i}>
          Card {i}
          <div className={styles.one} />
          <div className={styles.two} />
          <div className={styles.three} />
          <div className={styles.four} />
          <div className={styles.five} />
          <div className={styles.six} />
          <div className={styles.seven} />
        </div>
      ))}
    </div>
  );
};

export default PureCss;
