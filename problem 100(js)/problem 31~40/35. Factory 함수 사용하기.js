function one(n) {
  function two(val) {
    const answer = Math.pow(val, n);
    return answer;
  }
  return two; //return을 통해 one()함수는 내부스코프에 있는 two()를 실행한다. 스코프란 무엇인지
  //다시한번 알고 갈 수 있다!
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
