//Além da palavra reservada VAR, também temosn Const e LET
//Vejamos suas diferenças.

//Para começo, estas palavras são da nova atualização do
//Javascript, ela é chamada de ES6 (EcmaScript6)

//ela é umva variavel Global, ou seja
//podemos acessá-la a qualquer hora e lugar.rs
var numero1 = 4;

//O Let, também o Const, eles tem um escopo local..
//Ou seja, eles só existem onde foram criados!
//Se caso a gente crie um let ou const dentro de um bloco
//so podemos acessa-los neste mesmo local.
let numero2 = 5;


//-----------------------------------------------------------------------//
//Bom, o const, é uma constante, ou seja, ela NÃO pode ser reescrita
//porém, ela pode ser mudada.
//No exemplo, usamos um array
const numero3 = [6];
//Se usarmos o push(), uma função nativa para incluir valor
//dentro de um array, veja como fica:
numero3.push(7);
console.log(numero3);

//ou podemos usar como objeto, também aceita nova propriedade.
const numero4 = {}; //Criamos um objeto vazio.
numero4.nome = "Jhonn"; //Inserimos uma propriedade nome, com valor Jhonn
console.log(numero4);