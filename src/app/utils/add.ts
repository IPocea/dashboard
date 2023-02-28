const correction = (num: number) => parseFloat(num.toPrecision(15));

export const add = (...args: number[]): number => {
  let sum = 0;
  for(let arg of args) {
    sum = correction(sum + arg);
  }
  return sum;
}

