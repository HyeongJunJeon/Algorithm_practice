const n = prompt("수를 입력하세요").split(" ");

const share = parseInt(n[0], 10) / parseInt(n[1], 10);

const remainder = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(share, remainder);
