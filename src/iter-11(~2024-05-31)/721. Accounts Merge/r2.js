// 1. key 가 email 인 map 을 만든다 -> parentEmailMap(graph 형식)
// 2. name map 을 만든다
// 3. 2loop and parentEmailMap and nameMap 갱신
// 4. parentEmailMap 의 loop and result 전의 데이터 생성
// 5. result 가공후 solve return

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

  const union = (x, y) => {
    const findEmailKey = find(x);
    const findEmailParent = find(y);
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
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
]);
