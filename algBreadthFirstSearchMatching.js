const breadthFirstSearch = ({ item, match, itemsMatched = [], queue = [] }) => {
  if (Array.isArray(item)) {
    const nextItem = queue[0];
    const newQueue = [...queue.slice(1), ...item];
    return breadthFirstSearch({
      item: nextItem,
      match,
      itemsMatched,
      queue: newQueue,
    });
  }
  const newItemsMatched = match(item)
    ? [...itemsMatched, item]
    : [...itemsMatched];
  if (queue.length > 0) {
    const nextItem = queue[0];
    const newQueue = queue.slice(1);
    return breadthFirstSearch({
      item: nextItem,
      match,
      itemsMatched: newItemsMatched,
      queue: newQueue,
    });
  }
  return newItemsMatched;
};

const data = [9, [1, 2, 3], [4, [5, 6]], [7, [8, [9]]]];

const isGreaterThanThree = item => item > 3;

breadthFirstSearch({ item: data, match: isGreaterThanThree });
