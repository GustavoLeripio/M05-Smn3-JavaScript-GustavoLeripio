const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const drawRectangle = (height, width) => {
  for (let i = 0; i < height; i++) {
    let line = '';
    for (let j = 0; j < width; j++) {
      line += '*';
    }
    console.log(line);
  }
};

const getInput = () => {
  rl.question('Informe se deseja imprimir um retângulo (s/n): ', (answer) => {
    if (answer.toLowerCase() === 's') {
      rl.question('Informe a altura do retângulo: ', (height) => {
        height = parseInt(height);
        if (height <= 0) {
          console.log('Entrada inválida.');
          getInput();
        } else {
          rl.question('Informe a largura do retângulo: ', (width) => {
            width = parseInt(width);
            if (width <= 0 || width <= height) {
              console.log('Entrada inválida.');
              getInput();
            } else {
              drawRectangle(height, width);
              rl.question('Informe se deseja imprimir outro retângulo (s/n): ', (response) => {
                if (response.toLowerCase() === 's') {
                  getInput();
                } else {
                  rl.close();
                }
              });
            }
          });
        }
      });
    } else {
      rl.close();
    }
  });
};

getInput();
