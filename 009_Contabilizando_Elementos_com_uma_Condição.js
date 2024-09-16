/*Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

const clientes = [
    { nome: "Ana", idade: 34, cidade: "São Paulo" },
    { nome: "Bento", idade: 12, cidade: "Rio de Janeiro" },
    { nome: "Caio", idade: 38, cidade: "Belo Horizonte" },
    { nome: "Daniel", idade: 18, cidade: "Curitiba" },
    { nome: "Efisio", idade: 10, cidade: "Porto Alegre" },
  ];
  
  let n = 0;
  
  clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
      n++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${n}`);