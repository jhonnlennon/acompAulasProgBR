//Devemos entener sobre ARRAY

//1 - Todo arrary tem seus index!
//2 - Podemos ter dentro dele qualquer tipo de dados.
//3 - length - é o tamanho do array.

alunos = new Array("Jhonn", "Isabela", "Javascript")

console.log(alunos.length);

//Outra forma, além do FOR, para ver o conteúdo de um array
//usamos o IN, veja abaixo:
//Aqui pega o INDEX

for (i in alunos) {
    console.log(alunos[i] + "Usando in");
}

//Acima ele esta pegando cada indice que existe no array "alunos"
//colocando cada um deles dentro do i, cada vez que for executado até acabar.


/*TAMBÉM TEMOS COMO PEGAR O ELEMENTO, VEJA QUE TOP! */
//AQUI PEGA O CONTEÚDO!
for (aluno of alunos) { //colocando cada elemento dentro do i, por vez.
    console.log(aluno + ", aqui, basta deixar a variavel que vai receber o valor."); //imprimindo
}