 function filtrarNumeros(vetor, valor) {
    return vetor.filter(numero => numero > valor);
}

var numeros = [];

while (true) {
    let entrada = prompt(`Insira o um número ou escreva para acabar:`);

    let numero = parseFloat(entrada, 10);

    if (!isNaN(numero)) 
        {
            numeros.push(numero);
            
        } 
        else 
        {
            break;
        }
}

let valorReferencia = prompt("Insira o valor de referência para filtrar os números:");

valorReferencia = parseFloat(valorReferencia);

if (isNaN(valorReferencia)) {
    alert("Entrada inválida. Por favor, insira um número.");
} else {
    let numerosFiltrados = filtrarNumeros(numeros, valorReferencia);

    alert("Números maiores que " + valorReferencia + ": " + numerosFiltrados.join(", "));
}