const str = prompt("문장을 입력하세요!");

console.log(str.split("").reverse().join(""));

//split('')으로 문자열을 하나하나 잘라서 배열로 만들고,
//reverse()메서드로 배열의 순서를 바꾸고,
//join('') 메서드로 요소들을 모두 붙여 문자열로 반환!
