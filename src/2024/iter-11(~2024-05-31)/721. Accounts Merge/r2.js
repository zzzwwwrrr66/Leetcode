var accountsMerge = function (accounts) {
  // graph
  const parents = {};
  const email2name = {};
  // parent 끝까지 찾아감
  const find = (x) => {
    // 가장 위의 부모를 찾아감
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }

    return parents[x];
  };

  const union = (child, parent) => {
    const findEmailKey = find(child);
    const findEmailParent = find(parent);
    parents[findEmailKey] = findEmailParent;
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parents[email]) {
        parents[email] = email;
      }

      email2name[email] = name;
      // 겹침을 확인하기 위해서 emails[0] 이 key 가 된다
      // 가장 parent 가 되는 이메일은 key, value 값이 같아진다
      union(email, emails[0]);
    }
  }
  console.log({ parents });
  const emails = {};
  for (const email of Object.keys(parents)) {
    const parent = find(email);
    if (parent in emails) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
  }

  console.log({ parents });

  return Object.entries(emails).map(([email, x]) => [email2name[email], ...x.sort()]);
};

accountsMerge([
  ["David", "David0@m.co", "David4@m.co", "David3@m.co"],
  ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
  ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
  ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
  ["David", "David4@m.co", "David1@m.co", "David3@m.co"],
]);
// accountsMerge([
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ]);
