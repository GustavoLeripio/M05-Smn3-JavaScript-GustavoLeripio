let pessoa = {};

pessoa.nome = 'Seu Nome';
pessoa.idade = 30;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

pessoa.idade = 35;
console.log('Idade atualizada:', pessoa.idade);

let pessoa2 = {
  nome: 'Outro Nome',
  idade: 25
};

for (let prop in pessoa2) {
  console.log(`${prop}: ${pessoa2[prop]}`);
}

pessoa2.apresentacao = function() {
  console.log(`Olá, eu sou ${this.nome}!`);
};

pessoa2.apresentacao(); 

pessoa.email = 'exemplo@gmail.com';
console.log('Email:', pessoa.email);
