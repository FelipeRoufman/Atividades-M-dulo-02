/*Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    departamentos:[
       {nome: "Departamento MC", funcionario: [
          { nome:"Ana", cargo:"Chefe"},
          { nome:"Bento", cargo:"Assistente"},
        ],},
        {nome:"Departamento BK", funcionario: [
          { nome:"Carlos", cargo:"Chefe"},
          { nome:"Daniel", cargo:"Assistente"},
        ], },
        {nome:"Departamento BB", funcionario: [
          {nome: "Euler", cargo:"Chefe"},
          {nome:"Felipe", cargo:"Assistente"},
        ],},
    ],
};
for(let i in empresa.departamentos){
    let deptos = empresa.departamentos[i]
    console.log(`Departamento - ${deptos.nome}:`)
    for(let func of deptos.funcionario){
        console.log(`${func.nome}, ${func.cargo}.`)
    }
}