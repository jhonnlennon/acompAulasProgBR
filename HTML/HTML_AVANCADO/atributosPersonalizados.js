let image = document.getElementById("redes");
//abaixo estamos dizendo que quando houver o evento de "click, executar a function ao lado."
image.addEventListener("click", function () {
    //esta forma abaixo, é a primeira forma, porém existe a segunda
    image.src = "./assets/facebook.png"

    //segunda forma
    //O set attribute, primeiro pega o atributo, depois o que acontece.
    image.setAttribute("src", "./assets/facebook.png");
})

//Vale lembrar que também temos o getAttribute..
//Você deve colocar qual é o atributo a ser pego..
let pegarAtributo = image.getAttribute("src");
console.log(pegarAtributo);

//vamos a um exemplo do uso do getAttribute, quando já existe certo!
//Poderia ter colocado o atributo com o setAttribute. Mas não é o caso.

//Aqui, pegamos o conteúdo de onde tem o id LISTA
let lista = document.getElementById("lista")

//Abaixo, de dentro para fora, primeiro pegamos o valor
//que esta no atributo num, ele retorna uma string com o valor 10
//agora usamos uma função nativa para passar para inteiro
//que é o parseInt
let num = parseInt(lista.getAttribute("num"));

//agora criamos uma variável para receber os valores
//que vamos adicionar na tag.
let conteudo = "Lista Automática <br>";

//criamos um looping para criar uma sequencia de lista
//de acordo com o numero/valor que esta no atributo "num"

for (let i = 1; i <= num; i++) {
    //o que deve fazer quando for executado o for

    //conteudo recebe o valor dele mesmo e adiciona uma lista
    conteudo += "<li>" + i + "</li>";
}

//agora alteramos tudo que esta com o id "LISTA"
lista.innerHTML = conteudo;

//======================================================================================//
//A forma correta de trabalhar com o atributo personalizado é usando o dataset...
//e quando adicionar o atributo, usar o "data-" na frente da variavel qualquer...

let lista2 = document.getElementById("lista2");
let ok = lista2.dataset.ok;
//lembrando que ele ainda fica como string.
//então o uso do parseInt()é obrigatório.
console.log(parseInt(ok));

//para ficar mais fácil, podemos setar o valor do dataset só
//com o comando abaixo

ok = lista2.dataset.ok = "30"
let qualquer1 = parseInt(ok)
console.log("Usando o dataset para mudar... " + qualquer1);
