var a1 = parseFloat(prompt("Podaj a1:"));
var a2 = parseFloat(prompt("Podaj a2:"));
var b1 = parseFloat(prompt("Podaj b1:"));
var b2 = parseFloat(prompt("Podaj b2:"));
var c1 = parseFloat(prompt("Podaj c1:"));
var c2 = parseFloat(prompt("Podaj c2:"));
if ((isNaN(a1)) || (isNaN(a2)) || (isNaN(b1)) || (isNaN(b2)) || (isNaN(c1)) || (isNaN(c2))) {
    document.write("<font color='red' size='5'>Jedna lub więcej z podanych wartosci nie jest liczba!</font>");
}
else {
    var W = a1 * b2 - a2 * b1;
    var Wx = c1 * b2 - c2 * b1;
    var Wy = a1 * c2 - a2 * c1;

    if (W !== 0) {
        var x = Wx / W;
        var y = Wy / W;
        document.write("Układ równań ma jedno rozwiązanie:<br>x = " + x + "<br>y = " + y);
    }
    else {
        if (Wx !== 0 || Wy !== 0) {
            document.write("<font color='red' size='5'>Układ równań jest sprzeczny (nie ma rozwiązań)!</font>");
        }
        else {
            document.write("<font color='red' size='5'>Układ równań ma nieskończenie wiele rozwiązań.</font>");
        }
    }
}