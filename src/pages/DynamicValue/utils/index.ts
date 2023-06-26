export const getTable = (max = 30) => {
  let table = [];
  for (let i = 0; i < max; i++) {
    table[i] = [1];
    for (let j = 1; j < max; j++) {
      const next = table[i][j - 1] - (Math.random() * table[i][j - 1]) / 10;
      // @ts-ignore
      table[i].push(next.toFixed(4));
    }
  }
  return table;
};

export const toPercent = (x: number) => (x * 100).toFixed(2).toString() + '%';
