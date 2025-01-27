function factorial(x) {
  let res = 1;
  for (let i = 2; i <= x; i++) {
    res *= i;
  }
  return res;
}

for (let i = 0; i < 15; i++) {
  console.log(factorial(i));
}
