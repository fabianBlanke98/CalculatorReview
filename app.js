
function BerekenSom() {
    var getal_1 = document.getElementById("getal_1").value;

    var getal_2 = document.getElementById("getal_2").value;

    var getal_3 = document.getElementById("getal_3").value;

    var som = parseFloat(getal_1) + parseFloat(getal_2);

    var uitkomst = document.getElementById("uitkomst");

    var eigenberekening = document.getElementById("eigenberekening");    

    uitkomst.innerHTML = "De som van " + getal_1 + " + " + getal_2 + " = " + som;

    eigenberekening.style.color = "rgb 0 255 0";

    var eigenberekening = getal_3;

    if (som == getal_3) {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is goed";
        document.getElementById("eigenberekening").style.color = "green";
    } else {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is fout";  
        document.getElementById("eigenberekening").style.color = "red";
    };

    if (getal_2 == 0) {
        document.getElementById("eigenberekening").innerHTML = "U gebruikt nul, dit is niet mogelijk!";
        document.getElementById("eigenberekening").style.color = "red";
    };
}

function Aftrekken() {
    var getal_1 = document.getElementById("getal_1").value;

    var getal_2 = document.getElementById("getal_2").value;

    var getal_3 = document.getElementById("getal_3").value;

    var som = parseFloat(getal_1) - parseFloat(getal_2);

    var uitkomst = document.getElementById("uitkomst");

    var eigenberekening = document.getElementById("eigenberekening");

    uitkomst.innerHTML = "De som van " + getal_1 + " - " + getal_2 + " = " + som;

    eigenberekening.style.color = "rgb 0 255 0";

    var eigenberekening = getal_3;

    if (som == getal_3) {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is goed";
        document.getElementById("eigenberekening").style.color = "green";
    } else {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is fout";  
        document.getElementById("eigenberekening").style.color = "red";
    };

    if (getal_2 == 0) {
        document.getElementById("eigenberekening").innerHTML = "U gebruikt nul, dit is niet mogelijk!";
        document.getElementById("eigenberekening").style.color = "red";
    };

}

function Delen() {
    var getal_1 = document.getElementById("getal_1").value;

    var getal_2 = document.getElementById("getal_2").value;

    var getal_3 = document.getElementById("getal_3").value;

    var som = parseFloat(getal_1) / parseFloat(getal_2);

    var uitkomst = document.getElementById("uitkomst");

    var eigenberekening = document.getElementById("eigenberekening");

    uitkomst.innerHTML = "De som van " + getal_1 + " / " + getal_2 + " = " + som;

    eigenberekening.style.color = "rgb 0 255 0";

    var eigenberekening = getal_3;

    if (som == getal_3) {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is goed";
        document.getElementById("eigenberekening").style.color = "green";
    } else {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is fout";  
        document.getElementById("eigenberekening").style.color = "red";
    };

    if (getal_2 == 0) {
        document.getElementById("eigenberekening").innerHTML = "U deelt door nul, dit is niet mogelijk!";
        document.getElementById("eigenberekening").style.color = "red";
    };
}

function Vermenigvuldig() {
    var getal_1 = document.getElementById("getal_1").value;

    var getal_2 = document.getElementById("getal_2").value;

    var getal_3 = document.getElementById("getal_3").value;

    var som = parseFloat(getal_1) * parseFloat(getal_2);

    var uitkomst = document.getElementById("uitkomst");

    var eigenberekening = document.getElementById("eigenberekening");

    uitkomst.innerHTML = "De som van " + getal_1 + " * " + getal_2 + " = " + som;

    eigenberekening.style.color = "rgb 0 255 0";

    var eigenberekening = getal_3;

    if (som == getal_3) {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is goed";
        document.getElementById("eigenberekening").style.color = "green";
    } else {
        document.getElementById("eigenberekening").innerHTML = "Het door jouw berekende antwoord is fout";  
        document.getElementById("eigenberekening").style.color = "red";
    };

    if (getal_2 == 0) {
        document.getElementById("eigenberekening").innerHTML = "U gebruikt nul, dit is niet mogelijk!";
        document.getElementById("eigenberekening").style.color = "red";
    };
}


