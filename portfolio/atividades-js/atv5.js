let soma = 0;

while (true) {
    let entrada = prompt("Insira um número inteiro (ou 0 para finalizar):");

    let numero = parseInt(entrada, 10);

    if (isNaN(numero)) {
        alert("Entrada inválida. Por favor, insira um número inteiro.");
        continue;
    }

    if (numero === 0) {
        break;
    }

    soma += numero;
}

alert("A soma dos números inseridos é: " + soma);