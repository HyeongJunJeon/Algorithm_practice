//다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);

// 1)  10
// 2)  12
// 3)  14
// 4)  16

// 답은 4번.
// i가 1일때 i가 5이하여서 true고,
// a는 11이 되고, 순환하면서 i는 3이된다.

// i가 3일때 i가 5이하여서 true고,
// a는 14가 되고, 순환하면서 i는 5가 된다.

// i가 5가되면서 조건식은 false가 되면서 for문이 끝난다.

// 답은 16.
