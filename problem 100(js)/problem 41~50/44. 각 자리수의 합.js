let n = prompt("숫자를 입력하세요.")
  .split("")
  .map((n) => parseInt(n, 10));

let result = 0;

for (let i = 0; i < n.length; i++) {
  result += n[i];
}

console.log(result);
