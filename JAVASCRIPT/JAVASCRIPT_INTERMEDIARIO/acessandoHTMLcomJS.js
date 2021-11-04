//Bom, nem toda tag da para ser acessada com o Document..
//Por exemplo: document.head.title, já não mostra o conteúdo.

//Então o primeiro método nativo que podemos chamar é o
//document.getElementById
//Repare que esta no singular o element
//Isso porque só podemos pegar 1 ID
let p1 = document.getElementById("p1");
console.log(p1);

//Caso a gente queira pegar todos os elementos
//Por exemplo, de uma classe, usamos
let classe = document.getElementsByClassName("paragrafo");
console.log(classe);
//Neste caso vai retornar um array com todos os elementos com a classe "paragrafo"
//para visualizar melhor
for (let p of classe) {
    console.log(p);
}
