function trocarLampada() {
    var lampadaAcesa = document.getElementById("lamp");
    var backgroundColor = document.body;

    if (lampadaAcesa.src.includes("assets/lamp_on.png")) {
        lampadaAcesa.src = "assets/lamp_off.png";
        backgroundColor.style.background = "radial-gradient(circle, #ffffff 8%, black 100%)";
    } else {
        lampadaAcesa.src = "assets/lamp_on.png";
        backgroundColor.style.background = "radial-gradient(circle,rgb(235, 255, 52) 8%, white 100%)"
    }
}