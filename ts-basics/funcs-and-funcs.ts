// () => void looks like a fcunction but is a type specification
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutationFunction: MutationFunction
): number[] {
  return numbers.map(mutationFunction);
}

// const myNewMutateFunction: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export type AdderFunction = (v: number) => number;

// Classic JS closure
function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
