let a = prompt("문자열을 입력하세요.");
let b = [];
let s = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] === a[i].toLowerCase()) {
    //a의 각자리의 알파벳이 소문자라면
    b.push(a[i].toUpperCase());
  } else {
    //b의 각자리의 알파벳이 대문자라면
    b.push(a[i].toLowerCase());
  }
}

for (let j = 0; j < b.length; j++) {
  s += b[j];
}

console.log(s);
