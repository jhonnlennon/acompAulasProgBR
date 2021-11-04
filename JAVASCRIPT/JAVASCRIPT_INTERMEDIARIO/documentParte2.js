//Vamos falar sobre o DOM, Documento Object Model...
//Ou modelo de documentos do objeto.

//Cada tag HTML, pode virar um objeto no javascrip...
//Automaticamente, podemos fazer interações ou até mesmo alterações..

//Vamos a um exemplo rápido.
//Bom, aqui mandamos imprimir o document "Nosso HTML"
//Depois, tudo que esta na tag Body
//Depois o "innerHTML" ele obtem ou define um item HTML.
//No caso abaixo, ele esta obttendo
console.log(document.body.innerHTML);

//Agora vamos definir
//Veja que usamos uma string com a tag html.
//Depois concatenamos com o document que já existia.
document.body.innerHTML = "<h1>Queremos editar!</h1>" + document.body.innerHTML

