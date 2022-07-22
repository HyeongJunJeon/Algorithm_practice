const str = prompt("문장을 입력하세요");

console.log(str.replace("q", "e"));
//replace()메서드는 제일 먼저 일치하는 패턴만 변환하기 때문에 모든 텍스트를 바꾸지않는다!

//모범답안
//1. 함수 사용
const word = prompt("입력하세요.");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));

//2. 정규식 사용
const word2 = prompt("입력하세요.");

console.log(word2.replace(/q/gi, "e")); //정규식을 공부해보자.
