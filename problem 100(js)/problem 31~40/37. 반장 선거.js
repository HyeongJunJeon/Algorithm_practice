const array = prompt("이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";

for (let index in array) {
  let val = array[index]; //val에 array의 인덱스값을 통해 각 학생이 몇번 반복되는지 저장.
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
} // result객체에서 학생이름을 키로 하고, 학생이름이 존재하지않는경우(undefined) 값은 1,
// 존재하는 경우 값은 해당 키의 값에 1을 더해준다.

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
}); // Object.keys()메서드를 통해 result객체의 키값을 가져와 누산기능인 reduce함수를 통해
// result객체의 각 키값의 값을 비교하여 최다득표자의 키값(학생이름)을 winner변수에 저장한다.

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
