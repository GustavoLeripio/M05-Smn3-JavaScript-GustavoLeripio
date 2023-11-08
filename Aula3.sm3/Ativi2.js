const prompt = require('prompt-sync')();
let controle = 0;

while(controle != 1){
  let nomeUsuario = prompt("Digite o seu nome de usuario: ");

  if(nomeUsuario.length >= 12){
    nomeUsuario = nomeUsuario.toLocaleLowerCase();
  }
  if(nomeUsuario.indexOf("@") === -1){
    console.log("Ops deu ERROR! o nome dos usuarios deve conter '@'");
  }
  if(nomeUsuario.indexOf("admin") !== -1){
    console.log("Erro! Nomes de usuarios nao podem conter 'Admin' ");
  }
  if(nomeUsuario.indexOf("user") !== -1){
    console.log("O nome foi validado!")
    console.log("O nome do usuario é: " + nomeUsuario);
    controle = 1;
  }
  else{
    console.log("O nome de usuarios deve conter pelo menos 12 caracteres")
  }

}

