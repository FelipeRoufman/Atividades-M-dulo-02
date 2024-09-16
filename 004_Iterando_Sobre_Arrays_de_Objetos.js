/*Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const peopleArrayObjects = [
    {
        nome: "Felipe",
        idade: "22",
        cidade: "Fortaleza"
    },
    {
        nome: "Antonio",
        idade: "19",
        cidade: "Fortaleza"
    },
    {
        nome: "Maria",
        idade: "22",
        cidade: "Fortaleza"
    },
    {
        nome: "Carlos",
        idade: "30",
        cidade: "Eusebio"
    },
    {
        nome: "Marcos",
        idade: "49",
        cidade: "Eusebio"
    }
]

for(let person of peopleArrayObjects){
    console.log(`nome: ${person.nome}, idade: ${person.idade}, cidade: ${person.cidade}`);
}