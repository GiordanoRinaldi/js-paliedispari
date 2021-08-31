//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

var sceltaUtente = prompt("Pari o Dispari ?");

sceltaUtente = sceltaUtente.toLowerCase();

console.log(sceltaUtente);

//while(!(sceltaUtente == "pari") && !(sceltaUtente == "dispari") ) {
//    sceltaUtente = prompt("Hai sbagiato a scrivere! Pari o Dispari?");
//}

while(sceltaUtente != "pari" && sceltaUtente != "dispari" ) {
    sceltaUtente = prompt("Hai sbagiato a scrivere! Pari o Dispari?");
}

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while( !(numeroUtente > 0) || !(numeroUtente < 6) || isNaN(numeroUtente)){
    numeroUtente = parseInt(prompt("Hai sbagliato Inserisci un numero da 1 a 5"));
}

function numeroRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var totale = numeroUtente + numeroRandom(1, 5);


function pariOdispari(somma) {
    if (totale%2 == 0) {
        somma = true; // pari
    } else {
        somma = false; // dispari
    }

    return somma;
}

if(sceltaUtente == "pari" && pariOdispari(totale) == true){
    alert("HAI VINTO");
} else if (sceltaUtente == "dispari" && pariOdispari(totale) == false ) {
    alert("HAI VINTO");
} else { 
    alert("BANGO VINCE!");
}

