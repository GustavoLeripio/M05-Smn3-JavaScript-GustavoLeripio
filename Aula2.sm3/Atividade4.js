const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro positivo: ', (input) => {
  const number = parseInt(input);

  switch (true) {
    case number <= 0:
      console.log("Nenhum número na sequência.");
      break;
    case number === 1:
      console.log("Sequência de Fibonacci até 1 :\n0");
      break;
    case number === 2:
      console.log("Sequência de Fibonacci até 2 :\n0, 1");
      break;
    default:
      let sequence = [0, 1];
      for (let i = 2; i < number; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      console.log(`Sequência de Fibonacci até ${number} :\n${sequence.join(', ')}`);
      break;
  }

  rl.close();
});
