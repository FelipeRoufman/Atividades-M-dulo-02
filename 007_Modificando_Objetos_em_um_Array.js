/*Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

function produto(nome, preco, desconto) {
    return {
        nome,
        preco, 
        desconto
    }
}

let item1 = produto("Casquinha", 5, 10)
let item2 = produto("Colosso", 11, 10)
let item3 = produto("MC", 23, 10)

let produtos = [item1, item2, item3]

produtos.forEach(produto => {
    let descontado = produto.preco - (produto.preco*(produto.desconto/100))
    console.log(`${produto.nome}(Preço:${produto.preco.toFixed(2)} Desconto:${produto.desconto}% Preço Final:${descontado.toFixed(2)}`)
})