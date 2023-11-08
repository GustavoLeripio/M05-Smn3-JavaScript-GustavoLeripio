const prompt = require("prompt-sync")();

function verificaEmail(email){
    if(email.indexOf("@gmail.com") != -1){
      console.log("O email contem '@gmail.com' ")
      let indexDominio = email.indexOf("@gmail.com");
      let nomeUsuario = email.slice(0, indexDominio);
      console.log("Nome do usuario: " + nomeUsuario)
    }
  else{
    console.log("O email nao tem '@gmail.com'");
    let indexDominio2 = email.indexOf("@")
    let nomeDominio = email.slice(indexDominio2);
    console.log("O Email é:" + nomeDominio)
  }
}

let email =  prompt("Digite seu email: ");
verificaEmail(email);