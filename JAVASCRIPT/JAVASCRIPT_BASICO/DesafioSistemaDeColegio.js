/*Queremos um sistema de colégio que verifique se o aluno
foi aprovado ou reprovado.*/


media = (n1, n2) => {
    m = (n1 + n2) / 2;
    if (m >= 6) {
        return ("Parabéns, você foi aprovado! Sua média foi de " + m);
    } else {
        return ("Você foi reprovado, sua média ficou em " + m + ", mas não desista!");
    }
}

console.log(media(5, 5));