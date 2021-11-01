var nota1 = 10.0;
var nota2 = 10.0;

var media = (nota1 + nota2) / 2;

if (nota1 <= 4.0 || nota2 <= 4.0) {
    if (nota1 <= 4.0) {
        console.log("Você esta de final porque sua Nota1 foi de " + nota1);
    } else {
        console.log("Você esta de final porque sua Nota2 foi de " + nota2);
    }
} else if (media < 6.0) {
    console.log("Recuperação Final");
} else {
    console.log("Aprovado!");
}


//Entendo o Switch agora....


switch (media) {
    case 10:
        console.log("Perfeito, continue assim!!!");
        break;

    case 8:
        console.log("Muito bem, siga melhorando!");
        break;

    case 6:
        console.log("Estude mais, sua média esta no limite.");
        break;

    default:
        console.log("Aqui a gente sempre colocar um valor padrão, para caso não tenha nenhuma das opções acima.");
        break;
}

//No caso acima, a lógica mais correta sera fazer
//Uma condição que classificasse como "Ótimo, Regular e Melhorar"
//E adicionar a variavel no lugar dos numeros do CASE.
//Mas acima, tbm funciona.