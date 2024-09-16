/*Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

const estoque = [
    { produto: "MC", quantidade: 100, minimo: 250 },
    { produto: "BK", quantidade: 150, minimo: 100 },
    { produto: "Refri", quantidade: 200, minimo: 150 },
    { produto: "Batata", quantidade: 250, minimo: 250 },
  ];
  
  estoque.forEach((Comida) => {
    if (Comida.quantidade < Comida.minimo) {
      Comida.quantidade *= 2;
      console.log(
        `${Comida.produto} atualizada para ${Comida.quantidade}`
      );
    }
  });
  
  console.log(estoque);