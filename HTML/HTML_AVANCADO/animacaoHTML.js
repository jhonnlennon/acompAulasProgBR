let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

//só lembrando que o setInterval(funçãoquevaiexecutar, tempo)
//Ele executa uma função após determinado tempo
function moverJogadorPara(x, y) {
    let posX = x + "px";
    let posY = y + "px";
    jogador.style.top = posX;
    jogador.style.left = posY;
}

setInterval(function () {
    //O que esta acontecendo, incrementando o valor de x e yInicial
    //a cada 500milisegundos
    moverJogadorPara(xInicial++, yInicial++);

}, 5)