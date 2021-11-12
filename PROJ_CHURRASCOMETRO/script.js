

/* Nossa lógica */
/*carne - 400g/people, if + 6hours 650g */
/*cerveja - 1200ml/people, if +6hours 2000ml  */
/*refrigerante/agua - 1000ml/people, if +6hours 1500ml */

/*children = 0.5 */

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");
var resultado = document.getElementById("resultado");



function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebida = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<h3>Prontinho!<h3>`;
    resultado.innerHTML += `========================`
    resultado.innerHTML += `<p>Carne: ${qtdTotalCarne}g</p>`;
    resultado.innerHTML += `<p>Cerveja: ${qtdTotalCerveja}g</p>`;
    resultado.innerHTML += `<p>Bebida: ${qtdTotalBebida}g</p>`;
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
/*     if (duracao > 6 && criancas > 0) {
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
} */