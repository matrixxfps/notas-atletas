# Sistema de Avaliação de Atletas de Ginástica Artística

## Descrição

Este projeto é uma aplicação em JavaScript que calcula a média de notas de atletas em uma competição de ginástica artística. Cada atleta recebe cinco notas de jurados, e a média é calculada desconsiderando a maior e a menor nota. O sistema apresenta o nome do atleta, as notas atribuídas e a média calculada.

## Funcionalidade

- Recebe uma matriz de objetos contendo o nome de cada atleta e suas notas.
- Calcula a média das notas, excluindo a maior e a menor.
- Exibe os resultados para cada atleta, incluindo:
  - Nome do atleta
  - Notas obtidas
  - Média válida

## Estrutura dos Dados

A entrada da função é uma matriz de objetos, onde cada objeto possui a seguinte estrutura:

```javascript
let atletas = [
    {
        nome: "Nome do Atleta",
        notas: [nota1, nota2, nota3, nota4, nota5]
    },
    // Outros atletas
];
