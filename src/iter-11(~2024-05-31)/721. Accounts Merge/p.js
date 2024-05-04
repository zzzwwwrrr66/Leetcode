// 1. key 가 email 인 map 을 만든다 -> parentEmailMap(graph 형식)
// 2. name map 을 만든다
// 3. 2loop and parentEmailMap and nameMap 갱신
// 4. parentEmailMap 의 loop and result 전의 데이터 생성
// 5. result 가공후 solve return

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const nameMap = new Map();
  const emailGraph = new Map();

  for (let i = 0; i < accounts.length; i++) {
    const currAccounts = accounts[i];
    const currName = currAccounts[0];
    for (let j = 1; j < currAccounts.length; j++) {
      nameMap.set(currAccounts[j], currName);

      if (!emailGraph.has(currAccounts[j])) {
        emailGraph.set(currAccounts[j], currAccounts[j]);
      }
      const emailKey = parentFindSet(currAccounts[j], emailGraph);
      const parentEmail = parentFindSet(currAccounts[1], emailGraph);
      emailGraph.set(emailKey, parentEmail);
    }
  }
  console.log("emailGraph1", { emailGraph });

  const resultMap = new Map();
  for (const [child, parent] of emailGraph.entries()) {
    const parentKey = parentFindSet(child, emailGraph);
    if (!resultMap.has(parentKey)) {
      resultMap.set(parentKey, []);
    }
    resultMap.get(parentKey).push(child);
  }

  console.log("emailGraph2", { emailGraph });

  const result = [...resultMap.values()].map((v) => {
    v.sort();
    return [nameMap.get(v[0]), ...v];
  });

  return result;
};

function parentFindSet(email, emailGraph) {
  if (emailGraph.get(email) !== email) {
    const parent = parentFindSet(emailGraph.get(email), emailGraph);
    emailGraph.set(email, parent);
  }

  return emailGraph.get(email);
}

// [i][0] == name
// [i][1~n] == 나머지에 공통 이메일이 있는경우 두계정은 확실한 동일 name
// 공통의 이름으로 공통의 아이디가 있는경우는 같은 name 의 key
// console.log(
//   accountsMerge([
//     ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//     ["John", "johnsmith@mail.com", "john00@mail.com"],
//     ["Mary", "mary@mail.com"],
//     ["John", "johnnybravo@mail.com"],
//   ])
// );
console.log(
  accountsMerge([
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"],
  ])
);
/*
Output
  [
    ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]
*/
// accountsMerge([
//   ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
//   ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
//   ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
//   ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
//   ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
// ]);
