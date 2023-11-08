let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];
  
  console.log("1 - Lista de tarefas:");
  for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1} - ${tarefas[i]}`);
  }
  
  let tarefasPendentes = tarefas.filter(tarefa => !tarefa.includes("Feito"));
  console.log("\n2 - Tarefas Pendentes:");
  console.log(tarefasPendentes);
  
  let tarefasOrdenadas = tarefas.slice().sort();
  console.log("\n3 - Tarefas Ordenadas:");
  console.log(tarefasOrdenadas);
  
  let primeirasTarefas = tarefas.slice(0, 2);
  console.log("\n4 - Primeiras Tarefas:");
  console.log(primeirasTarefas);
  
  tarefas.pop();
  console.log("\n5 - Lista de tarefas sem a última tarefa:");
  console.log(tarefas);
  
  tarefas.push("Ler livro novo");
  console.log("\n6 - Lista de tarefas com uma nova tarefa adicionada:");
  console.log(tarefas);
  