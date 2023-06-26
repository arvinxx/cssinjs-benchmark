import { FC } from 'react';

import { getTable, toPercent } from '../../utils';
// @ts-ignore
import styles from './styles.module.css';

const PureCss: FC = () => {
  const table = getTable();

  return (
    <div className={styles.container}>
      <div className={styles.tableClass}>
        {table.map((row, i) => (
          <div className={styles.rowClass} key={i}>
            {row.map((x, j) => (
              <div
                className={styles.cellClass}
                key={`${i}${j}`}
                style={{ background: `rgba(74, 174, 53, ${x})` }}
              >
                {toPercent(x)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PureCss;
