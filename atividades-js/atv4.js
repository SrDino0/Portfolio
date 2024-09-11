var numeros = [];

for (let i = 1; i <= 10; i++) {
    numeros[i] = i
}

numeros.forEach(num=>{
    document.write("<h3>"+num+"<h3>");
});