/*Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */

let carrinho = {
    itens : [
        {nome:"BK", quantidade: 20, precoUnitario: 23},
        {nome:"MC", quantidade: 30, precoUnitario: 32},
        {nome:"Sprite", quantidade: 40, precoUnitario: 19},
        {nome:"Batata", quantidade: 50, precoUnitario: 20},
        {nome:"BB", quantidade: 1, precoUnitario: 5},
    ]
}

let total = 0

carrinho.itens.forEach( item => {
    total += item.quantidade * item.precoUnitario
})

console.log(`O valor total: ${total.toFixed(2)}`)