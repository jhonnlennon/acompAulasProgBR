//Vamos falar sobre um obejto!
//para declarar um objeto devemos usar a seguinte sintaxe:

var aluno = {
    nome: "Joao",
    nota1: 7.5
}

//Diferente do array, que usavamos [] chaves...
//No objeto, usamos os colchetes {} ....
//So que um objeto, dentro dele, temos as suas variaves, que
//chamamos de propriedades...

//Um array:
arr = ["Jhonn", "Lennon", "Felix", "Figueiredo"]

//Um objeto:

obj = {
    nome: "qualquer nome",
    sobrenome: "qualquer sobrenome",
    idade: 20
}

//Já a impressão, por exemplo, seria
console.log(obj.nome, obj.sobrenome);

//Poderiamos também ter dentro de um objeto, um array.
//Veja como fica..

var carro = {
    cor: "branco",
    ano: 2015,
    marcamodelo: ["Hyundai", "HB20"]
}

//A impresão do array, caso quisesse, seria:

console.log(carro["marcamodelo"][0], carro["marcamodelo"][1]);

//Podemos também acrescentar uma propriedade dentro de um obejto, veja:
//1 - Forma:
carro.nomedapropriedade = 45000;
//2 - Forma:
carro["nomedasegundapropriedade"] = 32000;
carro["nomedaterceirapropriedade"] = "Se for string, tem que ter aspas."
//3 - Forma:
var umaVariavelQualquer = "NovaPropriedade";
carro[umaVariavelQualquer] = "Recebida de dentro de uma variavel"
console.log(carro);
//4 - Forma: 
carro["umNovoObjeto"] = new Object({ novoAno: 2015, novaMarcar: "VW" });

//Teste
