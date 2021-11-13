let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 10;
}
function avancar() {
    video.currentTime += 10;
}
function aumentar() {
    video.playbackRate += 0.1;
}
function diminuir() {
    video.playbackRate -= 0.1;
}
function play() {
    video.play();
}
function pause() {
    video.pause();
}
function desaparecer() {
    var hidenDisplay = document.getElementsByClassName("controle")[0];
    hidenDisplay.setAttribute("style", "display:none")
    console.log(hidenDisplay + "desaparecer");
}

function aparecer() {
    var hidenDisplay = document.getElementsByClassName("controle")[0];
    hidenDisplay.setAttribute("style", "display:block")
    console.log(hidenDisplay + "Aparecer");
}


//Caso a gente tivesse stop...
//Teriamos que usar em baixo do video.pause o:
// video.currentTime = 0;
