import { createStyles } from 'antd-style';

import { getTable, toPercent } from '@/pages/DynamicValue/utils';

// =================================== Cell =================================== //
const useValueStyles = createStyles(({ css }, value: number) => ({
  cellClass: css`
    display: table-cell;
    padding: 10px;
    background: rgba(74, 174, 53, ${value});
  `,
}));

const Cell = ({ value }: { value: number }) => {
  const { styles } = useValueStyles(value);
  return <div className={styles.cellClass}>{toPercent(value)}</div>;
};

const useStaticStyles = createStyles(({ css }) => ({
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
}));

// =================================== Table =================================== //

const AntdStyleProps = () => {
  const { styles } = useStaticStyles();
  const table = getTable();

  return (
    <div className={styles.container}>
      <div className={styles.tableClass}>
        {table.map((row, i) => (
          <div className={styles.rowClass} key={i}>
            {row.map((x, j) => (
              <Cell value={x} key={`${i}${j}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AntdStyleProps;
