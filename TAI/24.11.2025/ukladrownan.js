var a1=prompt("Podaj a1:");
var a2=prompt("Podaj a2:");
var b1=prompt("Podaj b1:");
var b2=prompt("Podaj b2:");
var c1=prompt("Podaj c1:");
var c2=prompt("Podaj c2:");
if ((isNaN(a1)) || (isNaN(a2)) || (isNaN(b1)) || (isNaN(b2)) || (isNaN(c1)) || (isNaN(c2))) {
    document.write("<font color='red' size='5'>Jedna lub więcej z podanych wartosci nie jest liczba!</font>");
}
else {
    var W = a1 * b2 - a2 * b1;
    var Wx = c1 * b2 - c2 * b1;
    var Wy = a1 * c2 - a2 * c1;

    if (W != 0) {
    var Wx / W;
    var Wy / W;
    document.write("Układ równań ma jedno rozwiązanie:<br>x = " + x + "<br>y = " + y);
    }
    else {
        if (Wx != 0) {
            document.write("<font color='red' size='5'>Układ równań jest sprzeczny (nie ma rozwiązań)!</font>");
        }
        else {
            if (Wy != 0) {
                document.write("<font color='red' size='5'>Układ równań ma nieskończoność rozwiązań</font>");
            }
            else {
                document.write("<font color='red' size='5'>Układ równań nie ma rozwiązań!</font>");
            }
        }
    }
}