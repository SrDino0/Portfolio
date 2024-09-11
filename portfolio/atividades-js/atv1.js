let numero = prompt("Por favor, insira um número:");

numero = parseFloat(numero);

if (isNaN(numero)) {
    alert("Por favor, insira um valor numérico válido.");
} else {
    if (numero > 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é neutro.");
    }
}