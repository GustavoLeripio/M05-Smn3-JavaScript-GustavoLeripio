const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;
let count = 0;

const getAverage = () => {
  if (count === 0) {
    console.log("Nenhum número foi inserido.");
  } else {
    const average = sum / count;
    console.log(`A média dos números digitados é: ${average}`);
  }
  rl.close();
};

const getInput = () => {
  rl.question('Digite um número (0 para sair): ', (input) => {
    const num = parseFloat(input);
    if (num === 0) {
      getAverage();
    } else {
      sum += num;
      count++;
      getInput();
    }
  });
};

getInput();
