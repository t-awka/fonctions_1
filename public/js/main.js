// exo1
function addition(nbr1, nbr2) {
    return nbr1 + nbr2; 
}
console.log(addition(4, 4));

// exo2
function soustraction(nbre1, nbre2) {
    return console.log(nbre1 - nbre2);
}
soustraction (5, 3);

// exo3
function mult(nobr1, nobr2) {
    return nobr1 * nobr2; 
}
console.log(mult(2, 4));

// exo4
function division(nbre1, nbre2) {
    return console.log(nbre1 / nbre2);
}
division (8, 4);

// exo5
function modulo(chiffre1, chiffre2) {
    return console.log(chiffre1 % chiffre2);
}
modulo (9, 4);

// exo6
function carre(chif1) {
    return console.log(Math.sqrt(chif1));
}
carre (16, 4);

// exo7
function expo(chiff1, chiff2) {
    return console.log(Math.pow(chiff1, chiff2));
}
expo (6, 4);

// exo8
function capi(txt) {
    return console.log(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
capi ("alalaJcIHQDIHgrehe");

// Exo 9.
function calcul(n1, operator, n2) {
    switch (operator) {
        case '+':
            return addition(n1, n2);
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            alert("Dors oslm")
            break;
    }
}
console.log(calcul(31, '+', 42));
// return met fin à la function comme un break.
// On peut appeler des fonctions dans d'autres fonctionnes comme avec les +.


