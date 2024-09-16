/*Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

const filmes = [
    {
        titulo: "O Som ao Redor",
        diretor: "Kleber Mendonça",
        anoLancamento: 2013
    },
    {
        titulo: "Central do Brasil",
        diretor: "Walter Salles",
        anoLancamento: 1998
    },
    {
        titulo: "Tropa de Elite",
        diretor: "Wagner Moura",
        anoLancamento: 2007
    },
    {
        titulo: "O que é isso, companheiro?",
        diretor: "Fernando Gabeira",
        anoLancamento: 1997
    },
    {
        titulo: "Bacurau",
        diretor: "Alessadro Malut",
        anoLancamento: 2019
    }
];

const nomefilme = [];

filmes.forEach(movie => {
    nomefilme.push(movie.titulo)
})

console.log(nomefilme);