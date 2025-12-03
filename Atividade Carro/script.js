var botãoVermelho = document.getElementById("vermelho");
var botãoBranco = document.getElementById("branco");
var carroVermelho = document.getElementById("red");
var carroBranco = document.getElementById("white");
var textos = document.getElementsByClassName("text");
var resultado = document.getElementById("result");
var botões = document.getElementsByClassName("btn");
var resetar = document.getElementById("resetar");
var acelerar = document.getElementById("acelerar");
var desacelerar = document.getElementById("desacelerar");
var carroSelecionado = null;

botãoVermelho.addEventListener("click", function() {

    document.body.style.backgroundColor = 'DarkRed';

    for (var i = 0; i < textos.length; i++) {
    textos[i].style.color = "white";
    resultado.innerHTML = "Vermelho";

    for (var i = 0; i < botões.length; i++) {
    botões[i].style.color = "white";
    }
  }

  carroSelecionado = carroVermelho;
});



botãoBranco.addEventListener("click", function() {

    document.body.style.backgroundColor = 'white';
    
    for (var i = 0; i < textos.length; i++) {
    textos[i].style.color = "black";
    }

    resultado.innerHTML = "Branco";

    for (var i = 0; i < botões.length; i++) {
    botões[i].style.color = "black";
    }

    carroSelecionado = carroBranco;
});

acelerar.addEventListener("click", function() {
    carroSelecionado.style.width = "45px";
    carroSelecionado.style.height = "45px";
    carroSelecionado.style.top = "50px";

        if (carroSelecionado === carroVermelho) {
            carroSelecionado.style.right = "215px";
        } else {
            carroSelecionado.style.left = "215px";
        }
});

desacelerar.addEventListener("click", function() {
    carroSelecionado.style.width = "60px";
    carroSelecionado.style.height = "60px";
    carroSelecionado.style.top = "70px";

        if (carroSelecionado === carroVermelho) {
            carroSelecionado.style.right = "195px";
        } else {
            carroSelecionado.style.left = "195px";
        }
});

resetar.addEventListener("click", function() {
    carroSelecionado.style.width = "50px";
    carroSelecionado.style.height = "50px";
    carroSelecionado.style.top = "60px";

        if (carroSelecionado === carroVermelho) {
            carroSelecionado.style.right = "205px";
        } else {
            carroSelecionado.style.left = "205px";
        }
});

