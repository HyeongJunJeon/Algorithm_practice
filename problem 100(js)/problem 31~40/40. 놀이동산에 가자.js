const limit = 50;
const n = 5;

const answer = [];

for (let i = 1; i <= n; i++) {
  let friend = prompt("몸무게를 입력하세요");
  answer.push(friend);
}

const average = answer.reduce((acc, cur) => acc + cur) / n; //평균을 이용해서 풀려했는데 잘되지 않았다.

//답안

let total = 0;
let count = 0;
const limit2 = prompt("제한 무게를 입력하세요.");
const n2 = prompt("인원수를 입력하세요.");

for (let i = 1; i <= n2; i++) {
  total += parseInt(prompt("무게를 입력해주세요."), 10);
  if (total <= limit2) {
    count = i;
  }
}

console.log(count);

// total에 인원수대로 몸무게를 +해주면서 제한몸무게보다 낮으면 count를 하나씩 올린다.
