let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

let numerosPrimos = numeros.filter(numero => ehPrimo(numero));
console.log("2 - Números Primos:");
console.log(numerosPrimos);

let quadradosDosPrimos = numerosPrimos.map(numero => numero ** 2);
console.log("\n3 - Quadrados dos Números Primos:");
console.log(quadradosDosPrimos);
