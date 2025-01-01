const inputData = {
  id: 1,
  child: [
    {
      id: 2,
      parentNodeId: 1,
      child: [
        {
          id: 4,
          parentNodeId: 2,
          data: "123",
        },
      ],
    },
    {
      id: 3,
      parentNodeId: 1,
    },
  ],
};

const input = [];
function flatRoot2(node) {
  if (!node) return;

  input.push({
    id: node.id,
    parentNodeId: "parentNodeId" in node ? node.parentNodeId : -1,
  });

  if ("child" in node) {
    for (const currNode of node["child"]) {
      flatRoot2(currNode, currNode.parentNodeId);
    }
  }
}

flatRoot2(inputData);

//--------------------------------------------------------

function sample() {
  const ROOT_ID = -1;
  const root = input.find((v) => v.parentNodeId === ROOT_ID);
  const child = input.filter((v) => v.parentNodeId !== ROOT_ID);
  const CHILD_KEY = "node";
  // base case
  if (!root) return {};
  if (child.length === 0) return root;

  const Q = [];
  root[CHILD_KEY] = [];
  Q.push({ currentNode: root, childNode: root[CHILD_KEY] });

  while (Q.length > 0) {
    const { currentNode, childNode } = Q.pop();

    const filteredChild = child.filter(
      (v) => v.parentNodeId === currentNode.id
    );
    if (filteredChild.length === 0) {
      delete currentNode[CHILD_KEY];
    }

    filteredChild.forEach((v) => {
      v[CHILD_KEY] = [];
      childNode.push(v);
      Q.push({ currentNode: v, childNode: v[CHILD_KEY] });
    });
  }
  return root;
}
console.log(sample());
