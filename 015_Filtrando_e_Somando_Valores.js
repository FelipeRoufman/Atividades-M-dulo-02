/*Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

let transacoes = [
    {tipo:"entrada", valor: 23},
    {tipo:"saida", valor: 56},
    {tipo:"saida", valor: 768},
    {tipo:"entrada", valor: 866},
    {tipo:"saida", valor: 1},   
]
let total = 0
transacoes.forEach(item => {
        if(item.tipo == "entrada"){
            total += item.valor}
        if(item.tipo == "saida"){
                total -= item.valor}
        })
console.log(`total: ${total}`)