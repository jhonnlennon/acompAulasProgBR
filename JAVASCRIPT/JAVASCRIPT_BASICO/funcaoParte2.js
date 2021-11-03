//Segunda parte de funções!

//A título de informação, quando imprimimos só o início
//de uma função, ela mostra nossa função, veja abaixo:

function saudacao() {
    return "Olá mundo!"
}

var s = saudacao;
console.log(s);

//Bom, como atribuímos a função saudacao dentro da variavel S
//agora se usarmos ela como uma função, ela funciona!
//Veja:

console.log(s());

//---------------------------------------------------------//
//Função anônima:
// Veja como a média fica mais simplificada.

media = function (n1, n2) {
    return (n1 + n2) / 2;
}
console.log(media(5, 5));

//---------------------------------------------------------//
//Função arrow, (seta)
//Uma forma mais otimizada para se declarar uma função.
//Para versão mais nova do javascript
media2 = (n1, n2) => {
    return (n1 + n2) / 2;
}
console.log(media2(10, 10));