const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let result = new Set();

for (let key in people) {
  result.add(people[key]); //빈 set객체 result에 add메서드로 중복된 키값을
  //제거하고, 내용을 집어넣는다.
}

console.log(result.size);

//다른풀이

const setPeople = new Set(Object.keys(people)); //Objects객체를 이용하여,
//바로넣어줄수있다!
console.log(setPeople.size);
