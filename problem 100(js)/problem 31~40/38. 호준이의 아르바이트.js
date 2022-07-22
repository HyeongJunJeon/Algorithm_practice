// 최고점의 개수라도 구해본 풀이...
const n = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

let answer = 0;

const max = parseInt(Math.max(...n));

for (i = 0; i < n.length; i++) {
  if (n[i] === max) {
    answer++;
  }
}

//모범 풀이

const scores = prompt("점수입력")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  }); //배열안에 숫자형타입으로 만들어준다. map을 쓰는게 인상적.

scores.sort((a, b) => {
  return a - b;
}); //오름차순으로 정리

let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop(); //오름차순이니까 제일 뒤에 요소가 최대값이므로 뺸다.
  if (!arr.includes(n)) {
    //arr에 최대값이 없으면
    arr.push(n); //arr에 추가한다.
  }
  count += 1; //arr에 추가되면 답이 되는 count에 1씩 추가한다.
}

console.log(count);
