/*Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota_1, e nota_2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

const alunos = [
    { nome: "Felipe",nota_1: 5, nota_2: 3 },
    { nome: "Carlos", nota_1: 2, nota_2: 9 },
    { nome: "Mario", nota_1: 10, nota_2: 7 },
    { nome: "Ana", nota_1: 3, nota_2: 3 },
  ];
  
  for (const aluno of alunos) {
    const media = (aluno.nota_1 + aluno.nota_2) / 2;
    console.log(`Aluno: ${aluno.nome} - Média: ${media}`);
  }