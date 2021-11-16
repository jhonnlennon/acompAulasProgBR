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

//====================================================================//
//Sobre o beginPath() e o closePath()
//Vamos criar um novo canvas para exemplificar...

//abaixo pegamos o conteúdo do id "tela3"
let tela4 = document.getElementById("tela3");
//abaixo chamamos o Contexto, 2d
let ctx4 = tela4.getContext("2d");
//abaixo usamos o beginPath(), ou seja, dizemos que começamos.
ctx4.beginPath();
//abaixo dizemos a largura da nossa linha
ctx4.lineWidth = 4;
//abaixo dizemos a cor da nossa linha
ctx4.strokeStyle = "red";
//abaixo dizemos onde nossa linha vai começar
ctx4.moveTo(10, 10);
//abaixo dizemos para onde a linha tem que ir
ctx4.lineTo(400, 300);
//abaixo chamamos a função stroke para dezenhar
ctx4.stroke();

//Sobre o beginPath() e o closePath()
//Vamos criar umma nova linha para usar o closePath()
ctx4.beginPath();
ctx4.lineWidth = 6;
ctx4.strokeStyle = "Blue";
ctx4.moveTo(50, 10);
ctx4.lineTo(300, 300);
ctx4.lineTo(200, 300);
//usando o closePath() para fechar o triangulo**..
ctx4.closePath();
ctx4.stroke();






