//Vamos falar sobre função.
//Função nada mais é que um apelido para um bloco de funções. 
//Simples assim!

//Vejamos sua sintaxe.

function media() {
    var nota1 = 10;
    var nota2 = 10;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}
//Acima, criamos basicamente um escopo de uma função
//Para chama-la devemos usar da senguinte forma:
media();
//Pronto, acima esta a forma de chamar uma função.

//Argumentos...
//Podemos usar argumentos dentro de uma função,
//para que ela possa ficar mais otimizada, e de fato,
//fazendo sua função de facilitadora.

//Atenção, cada caso é um caso.

function media2(n1, n2) {
    media2 = (n1 + n2) / 2;
    return media2
}
console.log(media2(3, 3));
