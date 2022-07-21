const n = prompt("1~9까지의 숫자 중 하나를 입력하시오.");

const answer = [];

for (i = 1; i <= 9; i++) {
  answer.push(n * i);
}

console.log(answer.join(" "));

//답안

const num = prompt("1 ~ 9까지의 숫자 중 하나를 입력하세요.");
let result = "";

for (let i = 1; i <= 9; i++) {
  result += i * num + " "; // 문자열 + 문자열로 합쳐서 나타낼 수도 있다.
}

console.log(result);
