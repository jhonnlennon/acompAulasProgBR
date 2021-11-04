//Bom, existem três formas de modificar um conteúdo
//Lembrando que devemos acessa-los por um ID, ou Classe, ou Tag

//A primeira forma:
var p = document.getElementById("p500");
//Pegamos o elemento por ID
p.innerHTML = "Novo conteúdo do Parágrafo."
//Mudamos pelo comando innerHTML
console.log(p);

//Esses dois vão colocar um texto dentro, já o innerHTML coloca uma tag.
p.innerText = "Mudando com o InnerText";
p.textContent = "Mudando com o InnerContent";

//Porém, o textContent mostra todo o texto que aparece na tag de fato.
//Mesmo que esteja com display none, por exemplo.
//-----------------------------------------------------------------------//

//Também podemos mudar o atributo de uma tag, no nosso exemplo
//vamos mudar o ID da tag p

p.getElementById("");