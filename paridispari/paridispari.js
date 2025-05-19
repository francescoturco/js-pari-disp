console.log('Pari e Dispari')


/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/



// chiedo all'utente di scegliere un numero tra pari e dispari 
let sceltaUtente = prompt("Scegli pari o dispari");
sceltaUtente = sceltaUtente.toLowerCase(); // trasformo tutto in minuscolo per non avere conflitti con caratteri maiusc/minusc
console.log(sceltaUtente)


// chiedo all'utente un numero da 1 a 5
let numeroUtente = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log('numero utente', numeroUtente);

// funzione che genera un numero a caso da 1 a 5 
function generaNumeroRandom() {
  let numeroCasuale = Math.floor(Math.random() * 5) + 1;
  console.log('nuemro computer', numeroCasuale);
  return numeroCasuale;
}

// usoo la funzione per far scegliere un numero al computer
let numeroComputer = generaNumeroRandom();

// sommo i due numeri utente e computer
let somma = numeroUtente + numeroComputer;
console.log('somma numero utente vs computer', somma)

// uso un'altra funzione per sapere se un numero è pari o dispari
function verificaPariDispari(numero) {
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}


// con una variabile controllo se l'utente ha vinto o ha perso
let risultato = verificaPariDispari(somma);
console.log(risultato);


if (sceltaUtente === risultato) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}

