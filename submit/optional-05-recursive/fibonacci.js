function fibonacci(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  const prevValue = fibonacci(n - 1);
  const nextValue =
    prevValue[prevValue.length - 1] + prevValue[prevValue.length - 2];

  return [...prevValue, nextValue];
}

// const numberForFibonacci = 10;
// console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
// for (let i = 0; i <= numberForFibonacci; i++) {
//   console.log(fibonacci(i));
// }

// Jangan hapus kode di bawah ini!
export default fibonacci;
