export function sumToNA(n: number): number {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  return (n * (n + 1)) / 2;
}

export function sumToNB(n: number): number {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  
  if (n <= 1) return n;

  return n + sumToNB(n - 1);
}

export function sumToNC(n: number): number {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}