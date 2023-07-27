// https://nodejsdev.ru/guides/metanit/params/
const n = process.argv[2] * 1;
let p = true;

if (n === 1) {
  p = false;
} else {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      p = false;
      break;
    }
  }
}

if (p === true) {
  console.log(n, "is a prime number!");
} else {
  console.log(n, "is not a prime number!");
}
