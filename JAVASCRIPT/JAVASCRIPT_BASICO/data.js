//Datas são objetos, veja como criar uma 
//Quando criamos uma data como abaixo, criamos com a data e hora atual

var d = new Date();
console.log(d);


//Podemos passar uma data, veja como
//Devemos lembrar que o MES, é um valor de um array
//Portanto, janeiro começa em 0, até dezembro que termina em 11
//A ordem é: ANO, MES, DIA, HORA, MINUTO, SEGUNDO, MILISEGUNDOS
var qualquer = new Date(2018, 00, 12, 22, 45);
console.log(qualquer);

//É importante que quando não passamos uma data e sim um valor
//Ele calcula esses valores em minutos até dias
//Ou seja, se colocar Date(1000), significa que é 1segundo.
//Exemplo:

var qualquer2 = new Date(1000 * 60 * 60 * 24);
console.log(qualquer2);
//Acima temos, 1000milisegundo, vezes 60, que da 1 min
//vezes 60, que é uma hora, vezes 24 que é horas.
//O que retorna 1 dia completo.

//Tambem podemos fazer 1 dia todalmente em milisegundo
//Se multiplicar da forma que esta no objeto 
//(1000 * 60 * 60 * 24) = 86400000 ou seja, 1 dia.
//----------------------------------------------------------//

//Tambem podemos fazer com STRING, porém, temos que dixar
//com a sintaxe em ingles. veja:

var qualquer3 = new Date("sep 05 2017 23:25");
//ou new Date("11 05 2017 23:25")
console.log(qualquer3);

//Outra forma:

var qualquer4 = new Date("05/25/2000");
//formato americano, vem mes antes.
//ou new Date("05-25-2000");
console.log(qualquer4);

//---------------------------------------------------------//
//Existem algumas funções navitas do Javascript para pegar
//datas, veja abaixo algumas principais.

var qualquer5 = new Date("07-20-1990");
console.log(qualquer5.getFullYear());
//neste caso, estamos pegando o ano da variavel qualquer5.
console.log(qualquer5.getMinutes());
//Neste caso, pegamos os minuos.
//Para saber todos, use o .get após a variável que estiver com a data.

//Brincado um pouco com a data.
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
console.log(qualquer5.getDay());
console.log(dias[qualquer5.getDay()]);
//Acima ele esta pegando o dia da semana, com o getDay()
//da variavel qualquer5
//depois ele imprime o dia da semana de acordo com o index
//do array dias, sendo domindo 0 e sabado 6.

console.log(qualquer5.getDate());
//Acima, ele pega o dia.

console.log(qualquer5.getMonth() + " ele é um array tbm, então janeiro começa em 0");
//Acima pega o mes, também é um array, começando em 0 como as semanas.

console.log(qualquer5.getTime() + " Pega a data em milisegundos");
//Pega a data atual com milisegundos.
//pense no bao, getTime()

console.log(qualquer5.setMilliseconds(1500));
//O comando SET, ao invés de GET, serve para colocar o tempo
//na hora que quiser. Tem as mesmas funções que o GET.
