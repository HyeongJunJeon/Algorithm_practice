//나의 풀이
const kor = 50;
const math = 50;
const eng = 50;

const average = Math.floor((kor + math + eng) / 3);

console.log(average);

//답

const scores = prompt("세 과목의 점수를 입력하세요.").split(" "); //split으로 배열로 쪼개서 index를 통해 for문을 돌렸다.
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.

//아쉬운점은 문제에서 입력을 한번에 3과목을 할 수 있게 해야하므로 prompt()메서드는 한번만 써야했었다.
// 문제를 더 잘읽어보도록 하자!
