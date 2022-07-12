const n = 5;

for (let i = 1; i <= n; i++) {
  let star = ""; // star에 값을 초기화 해주기 위해 for문 안에서 선언

  // //공백 증가 For문
  for (let k = 1; k <= n - i; k++) {
    star += " ";
  }

  //별 증가 for문
  for (let j = 1; j <= i * 2 - 1; j++) {
    star += "*";
  }
  console.log(star);
}
