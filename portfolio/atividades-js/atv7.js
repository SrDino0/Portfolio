let numeros = [];

for (let i = 0; i < 5; i++) {
    while (i <5) {
        let entrada = prompt(`Insira o ${i + 1}º número inteiro:`);

        let numero = parseInt(entrada, 10);

        if (!isNaN(numero)) 
            {
                numeros.push(numero);
                break;
            } 
            else 
            {
                alert("Entrada inválida. Por favor, insira um número inteiro.");
            }
    }
}

if (numeros.length > 0) {
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    alert(`O maior número inserido é: ${maior}`);
    alert(`O menor número inserido é: ${menor}`);
}
