let n = 59;
let f = 0;
let f1 = 1;

let ex: number[] = [];

for (let i = 0; i < n; i++) {
  checkConsecutive(f);
  let sum = f + f1;
  f = f1;
  f1 = sum;
}

console.log(ex);

function checkConsecutive(f: number) {
  let containsConsecutive = false;
  for (let i = 0; i < f.toString().length; i++) {
    if (
      parseInt(f.toString().charAt(i)) + 1 ==
        parseInt(f.toString().charAt(i + 1)) ||
      parseInt(f.toString().charAt(i)) - 1 ==
        parseInt(f.toString().charAt(i + 1))
    ) {
      containsConsecutive = true;
    }
  }
  if (containsConsecutive) {
    ex.push(f);
  }
}
