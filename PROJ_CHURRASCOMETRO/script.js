
function calcular() {
    /* Nossa lógica */
    /*carne - 400g/people, if + 6hours 650g */
    /*cerveja - 1200ml/people, if +6hours 2000ml  */
    /*refrigerante/agua - 1000ml/people, if +6hours 1500ml */

    /*children = 0.5 */

    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");

    var adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (duracao > 6 && criancas > 0) {
        let resultadoCarne = ((adultos * 650) + ((criancas * 650) / 2)); //resultado carne
        let resultadoRefrigerante = criancas * 1500; //resultado refri
        let resultadoCerveja = adultos * 2000; //resultado cerveja 
        console.log(resultadoCarne, resultadoCerveja, resultadoRefrigerante);
    } else if (duracao <= 6 && criancas > 0) {
        let resultadoCarne = ((adultos * 400) + ((criancas * 400) / 2)); //resultado carne
        let resultadoRefrigerante = criancas * 1000; //resultado refri
        let resultadoCerveja = adultos * 1200;//resultado cerveja 
        console.log(resultadoCarne, resultadoCerveja, resultadoRefrigerante);
    } else if (duracao > 6) {
        let resultadoCarne = adultos * 650; //resultado carne
        let resultadoCerveja = adultos * 2000; //resultado cerveja 
        console.log(resultadoCarne, resultadoCerveja);
    } else if (duracao <= 6) {
        let resultadoCarne4 = adultos * 400; //resultado carne
        let resultadoCerveja4 = adultos * 1200; //resultado cerveja
        return lancar() + resultadoCarne4

        console.log(resultadoCarne4, resultadoCerveja4);

    } else {
        alert("Algo deu errado, verifique se tem algum número negativo!")
    }
}
function lancar() {
    let liCarner = document.getElementById("carne");
    liCarner.innerHTML = "A quantidade mínima de carne é: "
}