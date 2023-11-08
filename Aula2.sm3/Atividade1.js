const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    let multiplicacao = 0;

    for (let i = 0; i < n2; i++) {
      multiplicacao += n1;
    }

    console.log(`A multiplicação de ${n1} por ${n2} é: ${multiplicacao}`);
    rl.close();
  });
});
