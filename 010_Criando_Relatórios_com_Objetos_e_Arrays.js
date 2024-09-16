/*Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

let vendas = [
    {produto:"Maça", quantidade: 200, valor: 3},
    {produto:"Pera", quantidade: 100, valor: 5},
    {produto:"Carne", quantidade: 8, valor: 80},
    {produto:"Pao", quantidade: 10, valor: 3},
    {produto:"Queijo", quantidade: 6, valor: 20},
]

let total = 0
vendas.forEach(item => {
    total += item.quantidade * item.valor
})

console.log("total: R$"+ total.toFixed(2))