let tela = document.getElementById("tela");

//todo canvas, tem um "contexto", um objeto onde podemos pegar
//para desenhar nele, seja linha ou retangulo ou qualquer outra coisa
//veja como pegar abaixo.
let ctx = tela.getContext("2d");

//Bom, no exemplo abaixo, vamos pegar o pincel e levar aos pontos
//0,0 da nossa tela, ou seja, superior esquerda.
//Com o comando abaixo, faremos isso.
ctx.moveTo(0, 0);

//Agora, vamos dizer para onde vai:
//Vejamos o comando. //o primeiro numero é x e o segundo y
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);

//Agora vamos dizer qual espessura da linha queremos
ctx.lineWidth = 5;

//Agora vamos modificar a cor da linha
ctx.strokeStyle = "blue"

//Agora vamos dizer o vai fazer
//esse stroke é que vai dar espessura para a linha.
ctx.stroke();

//====================================================================//
//Vamos desenhar um retangulo
let tela2 = document.getElementById("tela2");
let ctx2 = tela2.getContext("2d");

//a primeira coisa é definir a cor
ctx2.fillStyle = "blue";

//agora um retangulo prenchido.
//numero abaixo, x, y, quanto vai andar no eixo x e depois
//quanto vai andar no eixo y.
ctx2.fillRect(10, 10, 100, 200);

//para um retangulo não preenchido
//colocando uma linha na cor preta
ctx2.strokeStyle = "black";
ctx2.strokeRect(120, 10, 100, 200);

//====================================================================//
//Vamos desenhar um retangulo com borda colorida
let tela3 = document.getElementById("tela2");
let ctx3 = tela2.getContext("2d");

//Crio o retangulo
ctx3.rect(240, 10, 100, 200);

//Coloco a cor preta no retangulo
ctx3.fillStyle = "black";

//coloco a espessura da borda
ctx3.lineWidth = 5;

//coloco a cor da borda
ctx3.strokeStyle = "red";

//chamo o retangulo e a borda.
ctx3.fill();
ctx3.stroke();


//====================================================================//
//Vamos recortar dentro de um retangulo
//Notei que ele limpa em qualquer um não exatamente no ctx3.
ctx3.clearRect(250, 20, 30, 30)




