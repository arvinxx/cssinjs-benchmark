import { getTable, toPercent } from '@/pages/DynamicValue/utils';

const ReactBase = () => {
  const table = getTable();

  return (
    <div
      style={{
        border: '1px dashed #ccc',
        padding: '4px',
        height: '150px',
        overflow: 'auto',
        width: '120px',
      }}
    >
      <div style={{ display: 'table', marginTop: 10 }}>
        {table.map((row, i) => (
          <div key={i} style={{ display: 'table-row' }}>
            {row.map((x, j) => (
              <div
                key={`${i}${j}`}
                style={{
                  display: 'table-cell',
                  padding: 10,
                  background: `rgba(74, 174, 53, ${x})`,
                }}
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

export default ReactBase;
