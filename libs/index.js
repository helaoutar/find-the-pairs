export const makeGrid = (numberOfPairs) => {
  const grid = [];
  const map = Array(numberOfPairs)
    .fill()
    .reduce((acc, _, i) => {
      acc[i] = 0;
      return acc;
    }, {});

  for (let index = 0; index < numberOfPairs * 2; index++) {
    let done = false;
    while (!done) {
      const j = Math.floor(Math.random() * numberOfPairs);
      if (map[j] < 2) {
        grid.push(j);
        map[j]++;
        done = true;
      }
    }
  }
  return grid;
};
