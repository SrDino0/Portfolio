const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    while (true) {
        let entrada = prompt("Adivinhe um número entre 1 e 10:");

        let palpite = parseInt(entrada, 10);

        if (palpite === numeroSecreto) {
            alert("Parabéns! Você acertou o número!");
            break;
        } else {
            alert("Tente novamente!");
        }
    }

