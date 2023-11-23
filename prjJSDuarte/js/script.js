function Calcular() {

    var numero = parseInt(document.getElementById("numero").value);
    var tabuada = "";

    if (isNaN(numero)) {
        alert ("Insira um número valído")
    } else {
        for (var i = 1; i <11; i++) {
            tabuada += numero*i + "<br>";
        }
    }

    document.write(tabuada + "<br><a href='index.html'>Home</a>");
}