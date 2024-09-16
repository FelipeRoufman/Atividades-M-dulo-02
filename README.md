# Atividades-M-dulo-02
 Aqui tem as questoes resolvidas do modulo 2
 
Este repositório contém uma série de exercícios focados na manipulação de objetos e arrays em JavaScript, utilizando loops como `for...in`, `for...of` e o método `forEach`. Os exercícios são divididos em diferentes categorias e têm como objetivo ajudar a praticar e dominar técnicas básicas de programação orientada a objetos e estrutura de dados.

## Descrição dos Exercícios

#### Acessando Propriedades de Objetos
**Objetivo**: Criar um objeto `carro` com propriedades como `marca`, `modelo`, `ano` e `cor`. Iterar sobre essas propriedades usando `for...in` e exibir os valores no console.

#### Verificando Propriedades
**Objetivo**: Criar um objeto `livro` com propriedades `titulo`, `autor`, `anoPublicacao` e `genero`. Verificar se a propriedade `editora` existe no objeto usando `for...in`. Se não existir, adicionar essa propriedade ao objeto.

#### Filtrando Propriedades de Objetos
**Objetivo**: Dado um objeto `produto` com várias propriedades, criar uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Usar `for...in` para filtrar as propriedades.

#### Iterando Sobre Arrays de Objetos
**Objetivo**: Criar um array de objetos `pessoas`, onde cada objeto representa uma pessoa com `nome`, `idade` e `cidade`. Usar `for...of` para exibir as informações de cada pessoa no console.

#### Calculando Valores em Arrays de Objetos
**Objetivo**: Criar um array de objetos `alunos`, cada um com propriedades `nome`, `nota1` e `nota2`. Usar `for...of` para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

#### Filtrando Arrays de Objetos
**Objetivo**: Criar um array de objetos `funcionarios`, onde cada objeto contém informações como `nome`, `cargo` e `salario`. Usar `for...of` para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

#### Modificando Objetos em um Array
**Objetivo**: Criar um array de objetos `produtos`, onde cada objeto tem `nome`, `preco` e `desconto`. Usar `forEach` para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

#### Criando Novos Arrays a Partir de Objetos
**Objetivo**: Criar um array de objetos `filmes`, onde cada filme tem `titulo`, `diretor` e `anoLancamento`. Usar `forEach` para criar um novo array contendo apenas os títulos dos filmes.

#### Contabilizando Elementos com uma Condição
**Objetivo**: Criar um array de objetos `clientes`, cada um com propriedades `nome`, `idade` e `cidade`. Usar `forEach` para contar quantos clientes têm mais de 30 anos.

#### Criando Relatórios com Objetos e Arrays
**Objetivo**: Criar um array de objetos `vendas`, onde cada objeto tem `produto`, `quantidade` e `valor`. Usar `forEach` para calcular o valor total de vendas de todos os produtos.

#### Agrupando Elementos com `forEach`
**Objetivo**: Criar um array de objetos `pedidos`, onde cada pedido tem `cliente`, `produto` e `quantidade`. Usar `forEach` para criar um objeto que agrupa a quantidade total de produtos por cliente.

#### Atualizando um Array de Objetos
**Objetivo**: Criar um array de objetos `estoque`, onde cada objeto tem `produto`, `quantidade` e `minimo`. Usar `forEach` para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

#### Implementando um Carrinho de Compras
**Objetivo**: Criar um objeto `carrinho` com uma propriedade `itens`, que é um array de objetos. Cada objeto dentro de `itens` deve representar um produto no carrinho, com `nome`, `quantidade` e `precoUnitario`. Usar `forEach` para calcular o valor total do carrinho.

#### Manipulando Objetos Complexos
**Objetivo**: Criar um objeto `empresa` com uma propriedade `departamentos`, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionários. Usar `for...in` e `for...of` para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

#### Filtrando e Somando Valores
**Objetivo**: Criar um array de objetos `transacoes`, onde cada transação tem `tipo` (entrada ou saída) e `valor`. Usar `forEach` para calcular o saldo final, somando as entradas e subtraindo as saídas.

## Como Instalar

### 1. Instalar o Node.js
Para rodar os exercícios, é necessário ter o Node.js instalado em sua máquina. Siga os passos abaixo para instalar:

- Acesse o site oficial do Node.js: [https://nodejs.org](https://nodejs.org)
- Baixe e instale a versão recomendada para o seu sistema operacional.
- Após a instalação, verifique se o Node.js foi instalado corretamente, rodando o seguinte comando no terminal:

```bash
node -v
