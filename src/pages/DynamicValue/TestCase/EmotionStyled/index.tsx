import styled from '@emotion/styled';

import { getTable, toPercent } from '@/pages/DynamicValue/utils';

const EmotionStyledContainer = styled.div`
  border: 1px dashed #ccc;
  padding: 4px;
  height: 150px;
  overflow: auto;
  width: 120px;
`;

const Table = styled('div')`
  display: table;
  margin-top: 10px;
`;

const Row = styled('div')`
  display: table-row;
`;

const CellDefault = styled('div')`
  display: table-cell;
  padding: 10px;
`;

function EmotionStyledTable() {
  const table = getTable();

  return (
    <EmotionStyledContainer>
      <Table>
        {table.map((row, i) => (
          <Row key={i}>
            {row.map((x, j) => (
              <CellDefault
                key={`${i}${j}`}
                style={{ background: `rgba(74, 174, 53, ${x})` }}
              >
                {toPercent(x)}
              </CellDefault>
            ))}
          </Row>
        ))}
      </Table>
    </EmotionStyledContainer>
  );
}

export default EmotionStyledTable;
