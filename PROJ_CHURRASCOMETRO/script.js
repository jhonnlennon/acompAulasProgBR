function calcular() {
    /* Nossa lógica */
    /*carne - 400g/people, if + 6hours 650g */
    /*cerveja - 1200ml/people, if +6hours 2000ml  */
    /*refrigerante/agua - 1000ml/people, if +6hours 1500ml */

    /*children = 0.5 */

    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (duracao > 6 && criancas > 0) {
        ((adultos *= 650) * 0.5)
        console.log(adultos);
    } else if (duracao > 6) {
        ((adultos *= 650) * 0.5)
        console.log(adultos);
    } else {
        adultos *= 400
        console.log(adultos);
    }
}