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
            alert('A média é '+ encontrarMedia(numeros))
            break;
        }
}

function encontrarMedia(vetor) {
    let soma = vetor.reduce((acc, num) => acc + num, 0);

    let media = soma / vetor.length;

    return media;
}
