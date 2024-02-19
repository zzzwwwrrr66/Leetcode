const root = {
  id: 1,
  child: [
    {
      id: 2,
      child: [
        {
          id: 4,
          data: "123",
        },
      ],
    },
    {
      id: 3,
    },
  ],
};

const displayList = [];
function flatRoot(node, parentNodeId) {
  if (!node) return;

  displayList.push({
    id: node.id,
    parentNodeId,
  });

  if ("child" in node) {
    for (const currNode of node["child"]) {
      flatRoot(currNode, node.id);
    }
  }
}

flatRoot(root, -1);
console.log(displayList);

const root2 = {
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

const displayList2 = [];
function flatRoot2(node) {
  if (!node) return;

  displayList2.push({
    id: node.id,
    parentNodeId: "parentNodeId" in node ? node.parentNodeId : -1,
  });

  if ("child" in node) {
    for (const currNode of node["child"]) {
      flatRoot2(currNode, currNode.parentNodeId);
    }
  }
}

flatRoot2(root2);
console.log(displayList2);
