let livro = {
    titulo: "Aventuras de Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    anoPublicacao: 1865,
    genero: "Fantasia",
    disponivel: true,
    emprestarLivro: function() {
      this.disponivel = false;
      console.log("Livro emprestado. Disponível: " + this.disponivel);
    }
  };

  console.log("Título: " + livro.titulo);
  console.log("Autor: " + livro.autor);
  console.log("Ano de Publicação: " + livro.anoPublicacao);
  console.log("Gênero: " + livro.genero);
  console.log("Disponível: " + livro.disponivel);

  livro.emprestarLivro();

  let animalDeEstimacao = {
    nome: "Rex",
    especie: "Cachorro",
    idade: 5,
    fazerBarulho: function() {
      console.log("O " + this.nome + " está latindo!");
    },
    envelhecer: function() {
      this.idade++;
    },
    trocarNome: function(novoNome) {
      this.nome = novoNome;
    }
  };

  console.log("Nome: " + animalDeEstimacao.nome);
  console.log("Espécie: " + animalDeEstimacao.especie);
  console.log("Idade: " + animalDeEstimacao.idade);
  animalDeEstimacao.fazerBarulho();
  animalDeEstimacao.envelhecer();
  console.log("Idade após envelhecer: " + animalDeEstimacao.idade);
  animalDeEstimacao.trocarNome("Max");
  console.log("Novo nome: " + animalDeEstimacao.nome);
  