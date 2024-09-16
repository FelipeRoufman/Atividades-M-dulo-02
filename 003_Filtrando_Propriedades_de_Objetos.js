/*Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

let item = {
    nome: "Carro",
    preco: 4000,
    avaliacao: 10,
    vendidos: 2,
    guardados: 5,
}

let limite = 10

let resultado = (item, limite) => {
    let novoitem = {}
    for (let propriedade in item) {
        if (item[propriedade] >= limite) {
            novoitem[propriedade] = item[propriedade]
        }
    }

    return novoitem
}

console.log(resultado(item, limite))