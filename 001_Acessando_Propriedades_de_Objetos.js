/*Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/

let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "Preto"
}
for(let key in carro) {
    console.log(`${key}: ${carro[key]}`)
}