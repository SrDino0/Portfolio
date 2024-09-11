let idade = prompt("Por favor, insira sua idade:");

idade = parseInt(idade, 10);

if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else {
    if (idade >= 0 && idade <= 12) {
        alert("Você é uma criança.");
    } else if (idade >= 13 && idade <= 17) {
        alert("Você é um adolescente.");
    } else if (idade >= 18 && idade <= 64) {
        alert("Você é um adulto.");
    } else {
        alert("Você é um idoso.");
    }
}