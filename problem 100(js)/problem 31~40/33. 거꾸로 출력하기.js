const n = prompt("숫자를 입력하세요").split(" ").reverse().join(" ");
console.log(n);

//답안 풀이

const data = prompt("숫자를 입력하세요.").split(" ").reverse();
const result = "";

for (let i = 0; i < data.length; i++) {
  result += data[i]; //data의 길이만큼 순회하며 빈 문자열 result에 문자열 + 문자열로 붙여주는 풀이.
}

console.log(result);
