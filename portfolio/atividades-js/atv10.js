function contarPalavra(vetor, palavra) {
    return vetor.filter(item => item === palavra).length;
}

let palavras = [];

while (true) {
    let entrada = prompt(`Escreva uma palavra, ou um numero para acabar:`);

    if (!isNaN(entrada)) 
        {
            break;
        } 
        else 
        {
            
            palavras.push(entrada);
        }
}

let palavraParaContar = prompt("Digite a palavra que deseja contar:");

let contagem = contarPalavra(palavras, palavraParaContar);

alert(`A palavra "${palavraParaContar}" aparece ${contagem} vez(es) no vetor.`);
