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

const Cell = styled(CellDefault)`
  background: rgba(74, 174, 53, ${(props: { value: number }) => props.value});
`;
function EmotionStyledTable() {
  const table = getTable();

  return (
    <EmotionStyledContainer>
      <Table>
        {table.map((row, i) => (
          <Row key={i}>
            {row.map((x, j) => (
              <Cell key={`${i}${j}`} value={x}>
                {toPercent(x)}
              </Cell>
            ))}
          </Row>
        ))}
      </Table>
    </EmotionStyledContainer>
  );
}

export default EmotionStyledTable;
