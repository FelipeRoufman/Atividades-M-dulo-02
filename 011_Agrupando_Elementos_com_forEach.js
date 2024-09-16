/*Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    {cliente:"Felipe", produto:"MC", quantidade: 1},
    {cliente:"Felipe", produto:"BK", quantidade: 2},
    {cliente:"Efisio", produto:"MC", quantidade: 3},
    {cliente:"Efisio", produto:"BK", quantidade: 4},
    {cliente:"Efisio", produto:"MK", quantidade: 5}
]
let total = {}
pedidos.forEach(item => {
   if(total[item.cliente]){
    total[item.cliente]+= item.quantidade
   } else {
    total[item.cliente] = item.quantidade
   }
})
console.log(total)