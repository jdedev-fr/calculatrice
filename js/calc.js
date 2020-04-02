/* Je déclare une fonction ajouteChiffre qui prends 
en paramètre une variable 
Cette fonction ajouteChiffre sera appellé par le HTML à chaque clic
sur un chiffre de la calculatrice
Evidemment chaque boutton appelle la fonctionavec son propre chiffre */

function ajouteChiffre(monChiffre) {
    document.getElementById("result").innerHTML += monChiffre;
}

/* Je déclare une fonction ajouteSymbole qui prends 
en paramètre une variable 
Cette fonction ajouteSymbole sera appellé par le HTML à chaque clic
sur un symbole +-* ou / de la calculatrice
Evidemment chaque boutton appelle la fonctionavec son propre symbole */
function ajouteSymbole(monSymbole) {
    var monResult = document.getElementById("result").innerHTML;
    //On cherche le symbole /
    if (monResult.indexOf("/") >= 0) {
        // Il y a un symbole / dans la chaine,
        // je ne fais donc rien
    }
    else {
        // Il n'y a pas de symbole / je cherche le symbole *
        if (monResult.indexOf("*") >= 0) {
            // Il y a un symbole * dans la chaine, 
            //je ne fais donc rien
        }
        else {
            // Il n'y a pas de symbole / 
            // Il n'y a pas de symbole * je cherche le symbole -
            if (monResult.indexOf("-") >= 0) {
                // Il y a un symbole - dans la chaine, 
                //je ne fais donc rien
            }
            else {
                // Il n'y a pas de symbole / 
                // Il n'y a pas de symbole *
                // Il n'y a pas de symbole - je cherche le symbole +
                if (monResult.indexOf("+") >= 0) {
                    // Il y a un symbole + dans la chaine, 
                    //je ne fais donc rien
                }
                else
                {
                    // Il n'y a pas de symbole / 
                    // Il n'y a pas de symbole *
                    // Il n'y a pas de symbole -
                    // Il n'y a pas de symbole +
                    // Je peux donc ajouter mon symbole
                    document.getElementById("result").innerHTML += monSymbole;
                }
            }
        }
    }
}