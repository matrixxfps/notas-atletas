let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let notas = atleta.notas.sort((a, b) => a - b); // Ordena as notas
        notas = notas.slice(1, 4); // Elimina a maior e a menor nota

        // Calcula a média
        let soma = 0;
        notas.forEach(nota => {
            soma += nota;
        });
        let media = soma / notas.length;

        // Apresenta os resultados
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
        console.log(`Média Válida: ${media.toFixed(6)}`); // Limita a 6 casas decimais
        console.log(); // Linha em branco para separação
    }
}

// Chama a função para calcular e mostrar os resultados
calcularMedia(atletas);
