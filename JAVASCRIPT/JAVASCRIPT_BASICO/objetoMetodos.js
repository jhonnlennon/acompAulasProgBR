//Métodos..
//Nada mais é que funções! :D

//Quando uma variavel tem uma função, chamamos de função..
//Quando um objeto tem uma função, chamamos de método..

carro = {
    cor: "Branco",
    marca: "Hyundai",
    modelo: "HB20",
    placa: "XYZ1312",
    anoFabricacao: 2015,
    anosPagos: [2015, 2016, 2017, 2018, 2019],

    //criando um método abaixo (A FORMA CORRETA SERIA COLOCAR ESSA FUNCAO SEPARADO VEJA LA EN BAIXO)
    virar: function (sentido) {
        if (sentido) {
            return "esta virando para esquerda!";
        } else {
            return "esta virando para direita!";
        }
    }
}

console.log(carro.modelo + "," + " " + carro.virar(false));
//para executar a função, veja abaixo:
/* console.log(carro.virar(false)); */
//no caso acima, minha logica esta para true e false mesmo.


//---------------------------------------------------------//
carro2 = {
    cor: "Preto",
    marca: "Volksvagem",
    modelo: "FOX",
    placa: "XYZ1415",
    anoFabricacao: 2010,
    anosPagos: [2020, 2021],
    //Abaixo eu coloco uma variável dentro de uma propriedade
    //esta variavel tem uma função, que é de virar o carro
    //veja logo abaixo
    virar: virarCarro,
}

function virarCarro(sentido) {
    if (sentido) {
        return "esta virando para esquerda!";
    } else {
        return "esta virando para direita!";
    }
}
console.log(carro2.modelo + "," + " " + carro2.virar(true));
//---------------------------------------------------------//
//
//vejamos o exemplo abaixo:
//Nosso carro 3
carro3 = {
    cor: "Cinza",
    marca: "Chevrolet",
    modelo: "Spin",
    placa: "ABC1234",
    anoFabricacao: 2015,
    anosPagos: [2019, 2020],
    virar: virarCarro,
    anosaPagar: calcularDocumentos
}
//vou criar uma função para calcular a quantidade de documentos pagos
function calcularDocumentos(docAtual) {
    return (2021 - docAtual + " IPVAs para pagar.")
}
console.log("A " + carro3.modelo + " tem " + carro3.anosaPagar(2018));
//---------------------------------------------------------//
//FALANDO SOBRE O MALDITO THIS!!!!
//this, traduzindo para portugues, é "isto"..
//Mas tudo depende do contexto.

aluno = {
    nome: "Jhonn",
    notas: [10, 10, 10],
    media: function () {
        return (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
    }
}
console.log(aluno.nome + " sua média foi de " + aluno.media());


//Uma forma mais automatica:
function calcMedia() {
    return (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
}

aluno2 = {
    nome: "Isabela",
    notas: [10, 10, 10],
    media: calcMedia
}
console.log(aluno2.nome + " sua média foi de " + aluno2.media());

