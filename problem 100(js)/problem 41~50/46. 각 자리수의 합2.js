const nums = "1234567891011121314151617181920";

const sum = nums
  .split("")
  .map((num) => parseInt(num))
  .reduce((acc, cur) => acc + cur);

console.log(sum);
