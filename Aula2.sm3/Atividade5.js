const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um texto: ', (input) => {
  let reversedText = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversedText += input[i];
  }
  console.log(`Texto invertido: ${reversedText}`);
  rl.close();
});
