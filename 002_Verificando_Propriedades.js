/*Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

const book = {
    titulo: "Percy Jackson e o Ladrão de Raios",
    autor: "Chris Columbus",
    anoPublicacao: "2010",  
    genero: "Ação"
}

let editora = false;

for(let propriedade in book){
    if(propriedade === "editora"){
        editora = true;
        break;
    }
}

if(!editora){
    book.editora = "20th Century Fox";
}

console.log(book);