const num = prompt("숫자를 입력하세요.");

function check_prime(num) {
  for (let i = 2; i < num; i++) {
    const result = num % i;
    if (result === 0) {
      //나머지가 0이라면 나누어떨어지는 거니까 NO
      console.log("NO");
      return false;
    }
  }
  if (num === 1) {
    console.log("NO"); // 입력값이 1이면 소수가 아니다.
    return;
  }
  console.log("YES");
}

check_prime(num);
