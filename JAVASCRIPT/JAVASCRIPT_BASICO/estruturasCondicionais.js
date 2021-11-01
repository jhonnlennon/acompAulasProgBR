//São estruturas de condição
//Primeiro o IF e ELSE

idade = 18;
if (idade >= 18) {
    console.log("Esta permitido comprar bebidas alcólicas!");
} else {
    console.log("Não esta permitido comprar bebida!");
}

//Segundo IF, ELSEIF, ELSE


if (idade <= 10) {
    console.log("Volte com seu responsável");
} else if (idade > 10 && idade < 18) {
    console.log("Qual é seu pedido?");
} else {
    console.log("Deseja algo mais?");
}

