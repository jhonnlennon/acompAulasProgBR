//Um pouco de contrutor

//Vamos criar uma função de forma que
//seja criada uma estrutura que cria um objeto, veja:

function criarAluno(nome, n1, n2) {
    //Abaixo ela retorna um objeto:
    return {
        nome: nome, //primeira propriedade que vai pegar o valor nome da função
        nota1: n1, //segunda propriedade que vai pegar a primeira nota da função
        nota2: n2,
        //abaixo, uma propriedade que tem uma função anonima para criar a média
        //usando o this, ja que as notas estão dentro do mesmo objeto, ou seja, tudo num lugar só
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

//vamos criar um array que tem varias funções que criam vários objetos..rs
var turma = [
    criarAluno("Jhonn", 10, 10),
    criarAluno("Isabela", 10, 10),
    criarAluno("Ninah", 6, 6),
    criarAluno("Miguelitos", 8, 8),
    criarAluno("ArturusBoladão", 9, 9)
]
//Vamos Visualizar isso no console.log.
var aluno = turma[2];
console.log(turma);
console.log(aluno);
console.log(aluno.media());


//Agora para fazer uma lista, vamos ver um complemento do FOR
//FOREACH

turma.forEach(function (variavelQualquer) {
    console.log(variavelQualquer);
})



//Entendo: O FOREACH, ele varre todo o array.
//Ele necessita de uma função com uma variavel qualquer
//para ele funcionar, exatamente como em cima.

//também temos o for of
//Que vai pegar todos o conteúdo de dentro do array e colocar na variavel
for (i of turma) {
    console.log(i);
}
//Já o for In, vai contar quantos indices tem e lista-los na tela.
for (y in turma) {
    console.log(y);
}



//-----------------------------------------------------------------//
//Tudo no JAVASCRIPT é um objeto.
//Vamos criar um construtor de objeto agora.
//Acima, nos criamos uma função que criava o objeto.

//Vamos lá
//Criamos uma função que vai criar propriedades de um objeto.

function criarAluno2(nome, n1, n2) {  //nesta primeira linha ele tem como parametro tres variaveis
    this.nome = nome; //nesta linha, estamos dizendo que a primeira propriedade se chama nome e vai ter o valor da variavel "nome" da função
    this.nota1 = n1;
    this.nota2 = n2;
    //Abaixo a propriedade media vai receber uma função anonima que vai retornar um objeto que é a formula da média do aluno
    this.media2 = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}

//Agora vamos instanciar, ou seja, iniciar nosso objeto
//Desta maneira, com este construtor, devemos usar o comando new.....
//Coloquei dentro de um array, só para testes mesmo
var alunosdaClasse = [new criarAluno2("Jhonn", 10, 10), new criarAluno2("Isabela", 10, 10)]

console.log(alunosdaClasse);