function printNumber(num: number): void {
  console.log(num);
}

function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers');
    }
    return a + b;
}

let x: number = 10;
let y: number = 20;

printNumber(add(x, y)); // Correct usage

try {
    printNumber(addSafe(x, "hello" as any)); //throws error
} catch (e) {
    console.error("Error: "+ e);
}

printNumber(addSafe(x,y)); // Correct usage