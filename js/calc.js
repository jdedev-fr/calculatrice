/* Je déclare une fonction ajouteChiffre qui prends 
en paramètre une variable 
Cette fonction ajouteChiffre sera appellé par le HTML à chaque clic
sur un chiffre de la calculatrice
Evidemment chaque boutton appelle la fonctionavec son propre chiffre */

function ajouteChiffre(monChiffre) {
    document.getElementById("result").innerHTML += monChiffre;
}