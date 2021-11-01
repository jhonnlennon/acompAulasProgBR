//Um pouco sobre String.

var str = "Podemos colocar uma string com aspas duplas"
var str2 = 'Podemos colocar uma string com aspas simples'
var str3 = 'Para usar "aspas duplas" dentro da nossa string, temos que usar "aspas simples" no lado de fora e vice-versa.'

console.log(str)
console.log(str2)
console.log(str3)

//Podemos também concatenar uma variavel com uma string

var str4 = "Hoje no vamos " //lembrar de deixar espaço.
str4 += "almoçar sushi."
console.log(str4)

//Tambem podemos ser assim:
var str5 = "Uma hora " + "ou outra " + "esse cachorro vai escapar!"
console.log(str5);

//Também pode ser assim:
valorProva = 100 //Quando não declaramos uma variavel com VAR, o Javascript já declara.
str6 = "como sabemos, a prova vale " + valorProva;
console.log(str6);

//Um atalho
var str6 = "8" * 2
//repare que acima temos uma string com numero
//em seguida adicionamos uma operação de multiplicar por 2
//O resultado é 16, porque o javascript reconhece que a string "8" é um numero.
//Se tivesse alguma letra ali, não daria certo.
console.log(str6);