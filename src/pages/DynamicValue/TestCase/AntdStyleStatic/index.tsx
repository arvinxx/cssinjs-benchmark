import { createStyles, css } from 'antd-style';

import { getTable, toPercent } from '@/pages/DynamicValue/utils';

const useStaticStyles = createStyles({
  container: {
    border: '1px dashed #ccc',
    padding: '4px',
    height: '150px',
    overflow: 'auto',
    width: '120px',
  },
  tableClass: css`
    display: table;
    margin-top: 10px;
  `,
  rowClass: css`
    display: table-row;
  `,

  cellClass: css`
    display: table-cell;
    padding: 10px;
  `,
});

const AntdStyleStatic = () => {
  const { styles } = useStaticStyles();
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
export default AntdStyleStatic;
