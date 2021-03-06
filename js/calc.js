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
                else {
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

/* Je déclare une fonction égal qui ne prends aucun paramètre
Cette fonction ajouteSymbole sera appellé par le HTML à chaque clic
sur = de la calculatrice
Evidemment chaque boutton appelle la fonctionavec son propre symbole */
function calcResult() {
    var monResult = document.getElementById("result").innerHTML;
    //On cherche le symbole /
    if (monResult.indexOf("/") >= 0) {
        // On doit faire une division
        // On prends la partie du début 0 à /
        var ope1 = monResult.substr(0, monResult.indexOf("/"))
        // On prends la partie de / à la fin
        var ope2 = monResult.substr(monResult.indexOf("/") + 1)
        // On calcule
        document.getElementById("result").innerHTML = "" + ((+ope1) / (+ope2))
    }
    else {
        // Il n'y a pas de symbole / je cherche le symbole *
        if (monResult.indexOf("*") >= 0) {
            //On doit faire une multiplication
            // On prends la partie du début 0 à *
            var ope1 = monResult.substr(0, monResult.indexOf("*"))
            // On prends la partie de * à la fin
            var ope2 = monResult.substr(monResult.indexOf("*") + 1)
            // On calcule
            document.getElementById("result").innerHTML = "" + ((+ope1) * (+ope2))
        }
        else {
            // Il n'y a pas de symbole / 
            // Il n'y a pas de symbole * je cherche le symbole -
            if (monResult.indexOf("-") >= 0) {
                //On doit faire une soustraction
                // On prends la partie du début 0 à -
                var ope1 = monResult.substr(0, monResult.indexOf("-"))
                // On prends la partie de - à la fin
                var ope2 = monResult.substr(monResult.indexOf("-") + 1)
                // On calcule
                document.getElementById("result").innerHTML = "" + ((+ope1) - (+ope2))
            }
            else {
                // Il n'y a pas de symbole / 
                // Il n'y a pas de symbole *
                // Il n'y a pas de symbole - je cherche le symbole +
                if (monResult.indexOf("+") >= 0) {
                    //On doit faire une addition
                    // On prends la partie du début 0 à +
                    var ope1 = monResult.substr(0, monResult.indexOf("+"))
                    // On prends la partie de + à la fin
                    var ope2 = monResult.substr(monResult.indexOf("+") + 1)
                    // On calcule
                    document.getElementById("result").innerHTML = "" + ((+ope1) + (+ope2))
                }
                else {
                    // Il n'y a pas de symbole / 
                    // Il n'y a pas de symbole *
                    // Il n'y a pas de symbole -
                    // Il n'y a pas de symbole +
                    // On ne fait rien
                }
            }
        }
    }
}

/* Je déclare une fonction clearAll qui ne prends aucun paramètre
Cette fonction clearAll sera appellé par le HTML à chaque clic
sur CE de la calculatrice */
function clearAll() {
    document.getElementById("result").innerHTML = ""
}

/* Je déclare une fonction bkSp qui ne prends aucun paramètre
Cette fonction bkSp sera appellé par le HTML à chaque clic
sur <- de la calculatrice */
function bkSp() {
    var monResult = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = monResult.substr(0, monResult.length - 1)
}

/* Je déclare une fonction clearOne qui ne prends aucun paramètre
Cette fonction clearOne sera appellé par le HTML à chaque clic
sur C de la calculatrice */
function clearOne() {
    var monResult = document.getElementById("result").innerHTML;
    //On cherche le symbole /
    if (monResult.indexOf("/") >= 0) {
        // Il y a un symbole / dans la chaine,
        // On prends la partie du début 0 à /
        var ope1 = monResult.substr(0, monResult.indexOf("/"))
        // On remplace le contenu par ope1
        document.getElementById("result").innerHTML = ope1;
    }
    else {
        // Il n'y a pas de symbole / je cherche le symbole *
        if (monResult.indexOf("*") >= 0) {
            // Il y a un symbole * dans la chaine, 
            // On prends la partie du début 0 à *
            var ope1 = monResult.substr(0, monResult.indexOf("*"))
            // On remplace le contenu par ope1
            document.getElementById("result").innerHTML = ope1;
        }
        else {
            // Il n'y a pas de symbole / 
            // Il n'y a pas de symbole * je cherche le symbole -
            if (monResult.indexOf("-") >= 0) {
                // Il y a un symbole - dans la chaine, 
                // On prends la partie du début 0 à -
                var ope1 = monResult.substr(0, monResult.indexOf("-"))
                // On remplace le contenu par ope1
                document.getElementById("result").innerHTML = ope1;
            }
            else {
                // Il n'y a pas de symbole / 
                // Il n'y a pas de symbole *
                // Il n'y a pas de symbole - je cherche le symbole +
                if (monResult.indexOf("+") >= 0) {
                    // Il y a un symbole + dans la chaine, 
                    // On prends la partie du début 0 à +
                    var ope1 = monResult.substr(0, monResult.indexOf("+"))
                    // On remplace le contenu par ope1
                    document.getElementById("result").innerHTML = ope1;
                }
                else {
                    // Il n'y a pas de symbole / 
                    // Il n'y a pas de symbole *
                    // Il n'y a pas de symbole -
                    // Il n'y a pas de symbole +
                    // on efface tout
                    clearAll();
                }
            }
        }
    }
}