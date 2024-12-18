function printNumber(num: number): void {
  console.log(num);
}

function add(a: number, b: number): number {
  return a + b;
}

let x: number = 10;
let y: number = 20;

printNumber(add(x, y)); // Correct usage
printNumber(add(x, "hello")); // Type error, but might not be caught immediately