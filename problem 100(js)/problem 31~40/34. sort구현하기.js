//나의 답안
const n = prompt("키를 입력하시오").split(" ");

const result = n.sort();

for (i = 0; i < n.length; i++) {
  if (n[i] === result[i]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
} //키의 순서대로 입력하지 않아도 NO가 출력되지 않았다.

//답안
const unsorted = prompt("키를 입력하세요");
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    return a - b; // 작은 수가 앞부분으로 갈 수 있게 해준다.
  })
  .join(" ");

if (unsorted === sorted) {
  //문자열과 문자열을 비교했어야 했다.
  console.log("Yes");
} else {
  console.log("No");
}
