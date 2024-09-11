let numero = prompt("Insira um número de 1 a 7 correspondente a um dia da semana (1 para Domingo, 2 para Segunda-feira, etc.):");

numero = parseInt(numero, 10);

if (isNaN(numero) || numero < 1 || numero > 7) {
    console.log("Número inválido. Por favor, insira um número de 1 a 7.");
} else {
    let dia;
    switch (numero) {
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Segunda-feira";
            break;
        case 3:
            dia = "Terça-feira";
            break;
        case 4:
            dia = "Quarta-feira";
            break;
        case 5:
            dia = "Quinta-feira";
            break;
        case 6:
            dia = "Sexta-feira";
            break;
        case 7:
            dia = "Sábado";
            break;
        default:
            dia = "Número inválido";
    }
    alert("O dia da semana é: " + dia);
}