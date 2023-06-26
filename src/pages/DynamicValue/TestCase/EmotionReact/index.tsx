/** @jsxImportSource @emotion/react */

/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react';

import { getTable, toPercent } from '@/pages/DynamicValue/utils';

const EmotionReactCSS = () => {
  const table = getTable();

  return (
    <div
      css={css`
        border: 1px dashed #ccc;
        padding: 4px;
        height: 150px;
        overflow: auto;
        width: 120px;
      `}
    >
      <div
        css={css`
          display: table;
          margin-top: 10px;
        `}
      >
        {table.map((row, i) => (
          <div
            css={css`
              display: table-row;
            `}
            key={i}
          >
            {row.map((x, j) => (
              <div
                css={css`
                  display: table-cell;
                  padding: 10px;
                  background: rgba(74, 174, 53, ${x});
                `}
                key={`${i}${j}`}
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

export default EmotionReactCSS;
