const livros = [
    {
      titulo: "Dom Casmurro",
      paginas: 300,
      genero: "clássico",
    },
    {
      titulo: "IT a coisa",
      paginas: 150,
      genero: "terror",
    },
    {
      titulo: "Jason",
      paginas: 70,
      genero: "terror",
    },
    {
      titulo: "Chapéuzinho Vermelho",
      paginas: 10,
      genero: "clássico",
    },
    {
      titulo: "Histórinhas de terror para crianãs",
      paginas: 50,
      genero: "clássico",
    },
   ];
   
function criarPilha(livros) {
const pilha = [];
for (let i = livros.length - 1; i >= 0; i--) {
pilha.push(livros[i]);
}
return pilha;
}
function inserirPilha(pilha, livro) {
pilha.push(livro);
}
function retirarPilha(pilha) {
return pilha.pop();
}

function verificaExistencia(pilha) {
return pilha.length === 0;
}
   
function buscarLivro(pilha, Domcasmurro) {
for (let i = pilha.length - 1; i >= 0; i--) {
    const livro = pilha[i];
    if (livro.titulo === Domcasmurro) {
    livroEncontrado = livro;
    break;
    }
}
return true;
   }
   
function imprimirPilha(pilha) {
for (let i = pilha.length - 1; i >= 0; i--) {
    const livro = pilha[i];
    console.log(`Livro ${livro.titulo}`);
    }
   }
   
   function verificaExistenciaLivro(pilha, ITacoisa ) {
     for (let i = pilha.length - 1; i >= 0; i--) {
       const livro = pilha[i];
       if (livro.titulo === ITacoisa) {
        return true;
      }
    }
    return false;
   }
   
   function esvaziarPilha(pilha) {
    while (!verificaExistencia(pilha)) {
      retirarPilha(pilha);
    }
   }
   
   
   const pilha = criarPilha(livros);
   
   const livroRetirado1 = retirarPilha(pilha);
   const livroRetirado2 = retirarPilha(pilha);
   const livroRetirado3 = retirarPilha(pilha);
   
   const livroEncontrado = buscarLivro(pilha, "IT a coisa");
   
   imprimirPilha(pilha);
   
   console.log(`A pilha está vazia? ${verificaExistencia(pilha)}`);
   
   esvaziarPilha(pilha);
   
   console.log(`A pilha está vazia? ${verificaExistencia(pilha)}`);
   
