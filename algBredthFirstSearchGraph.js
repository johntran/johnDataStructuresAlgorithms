/*
  Given a graph of nodes, find the shortest path.
  The nodes can potentially be circular.
*/

const visitedNodeBefore = (visitedList, currentNode) =>
  visitedList.find(visitedNode => visitedNode.value === currentNode.value);

const getDestinationNode = (currentNode, nodeDestination) =>
  currentNode.nextNodes.find(({ node }) => node === nodeDestination);

const generateNewPath = (path, child) => ({
  pathing: `${path.pathing}, ${child.node}`,
  totalDistance: path.totalDistance + child.distance,
});

const breadthFirstSearchGraph = ({
  graph,
  currentNode,
  nodeDestination,
  visited = [],
  path = { pathing: 'a', totalDistance: 0 },
}) => {
  if (!currentNode) {
    return breadthFirstSearchGraph({
      graph,
      currentNode: graph.a,
      nodeDestination,
    });
  }
  if (visitedNodeBefore(visited, currentNode)) return;
  if (!currentNode.nextNodes) return;
  const destinationNodeInChild = getDestinationNode(
    currentNode,
    nodeDestination
  );
  if (destinationNodeInChild) {
    return generateNewPath(path, destinationNodeInChild);
  }
  const traversedChildren = currentNode.nextNodes.map(child =>
    breadthFirstSearchGraph({
      graph,
      currentNode: graph[child.node],
      nodeDestination,
      visited: [...visited, currentNode],
      paths: generateNewPath(path, child),
    })
  );
  const validPaths = traversedChildren.filter(child => child);
  return validPaths.length > 0
    ? validPaths.sort((a, b) => a.totalDistance > b.totalDistance)[0]
    : 'no valid paths';
};

const graph = {
  a: {
    value: 'booya',
    nextNodes: [{ node: 'b', distance: 3 }, { node: 'c', distance: 6 }],
  },
  b: {
    value: 'booya1',
    nextNodes: [{ node: 'c', distance: 3 }, { node: 'd', distance: 6 }],
  },
  c: {
    value: 'booya2',
    nextNodes: [{ node: 'd', distance: 1 }, { node: 'e', distance: 2 }],
  },
  d: {
    value: 'booya3',
  },
  e: {
    value: 'booya4',
  },
};

breadthFirstSearchGraph({ graph, nodeDestination: 'd' });
