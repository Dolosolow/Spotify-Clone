/**
 * @function getMostPlayed
 * @description
 * get the most played playlist from given list. numOfList if entered will return the top n, played
 * playlist, Default is 1.
 * @example
 * numOfList 3 => [20, 18, 14]
 */
export const getMostPlayed = (list: any[], key: string, numOfList: number = 1) => {
  let listOfMostPlayed = [];
  let currentList = list;

  for (let c = 0; c < numOfList; c++) {
    let max = currentList.reduce(
      (max, value, idx) =>
        value["played"] > max.value ? { idx, id: value["id"], value: value["played"] } : max,
      { idx: 0, id: "", value: 0 }
    );

    currentList = currentList.filter((value) => value["id"] !== max.id);

    listOfMostPlayed.push(max);
  }

  return listOfMostPlayed;
};
