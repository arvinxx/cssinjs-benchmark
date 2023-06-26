import { getTable, toPercent } from '@/pages/DynamicValue/utils';
import { css } from '@emotion/css';

const container = css`
  border: 1px dashed #ccc;
  padding: 4px;
  height: 150px;
  overflow: auto;
  width: 120px;
`;

const tableClass = css`
  display: table;
  margin-top: 10px;
`;

const rowClass = css`
  display: table-row;
`;

const cellClass = css`
  display: table-cell;
  padding: 10px;
`;

const EmotionCSS = () => {
  const table = getTable();

  return (
    <div className={container}>
      <div className={tableClass}>
        {table.map((row, i) => (
          <div className={rowClass} key={i}>
            {row.map((x, j) => (
              <div
                className={cellClass}
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

export default EmotionCSS;
