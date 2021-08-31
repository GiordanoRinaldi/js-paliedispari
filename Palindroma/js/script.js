//Chiedere all’utente di inserire una parola
var parolautente = prompt("Inserici una parola che tu pensi sia palindroma");
//Creare una funzione per capire se la parola inserita è palindroma
function getPalindromo(parola){
    var contrario = "";
    for (var i = parola.length - 1; i >= 0; i--){
        contrario += parola[i];
    }
    
    if (contrario == parola){
        return true;
    }

    return false;
}

if(getPalindromo(parolautente)){
    alert("COMPLIMENTI! LA PAROLA CHE HAI INSERITO É PALINDROMA!");
} else {
    alert("RIPROVA!");
}