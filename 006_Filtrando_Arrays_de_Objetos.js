/*Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

const pessoas = [
    {
        pessoa: "Felipe",
        cargo: "Junior",
        salario: 900.00
    },
    {
        pessoa: "Thiago",
        cargo: "Senior",
        salario: 6000.00
    },
    {
        pessoa: "Beus",
        cargo: "Gato",
        salario: 50
    },
    {
        pessoa: "Lord",
        cargo: "Cachorro",
        salario: 50
    },
    {
        pessoa: "Mice",
        cargo: "Rato",
        salario: 0
    }
]

const limite = 1000;

for(let trabalho of pessoas){
    if(trabalho.salario > limite){
        console.log(`pessoa: ${trabalho.pessoa}; cargo: ${trabalho.cargo}; salario: ${trabalho.salario}`);
    }
}