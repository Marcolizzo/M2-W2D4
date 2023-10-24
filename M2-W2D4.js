// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const gaetano = {
  name: "Gaetano",
  lastName: "Quarto",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [51, 40, 10]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = gaetano //cambia il valore qui per provare se il tuo algoritmo funziona!

// faccio la somma dell'array "prices" e asegno il risultato alla variabile "carrello"
let carrello = 0
for (let i = 0; i < prices.length; i++) {
  carrello += prices[i]
}

// controllo se l'utente che sta effettuando l'acquisto è un ambassador. Se lo è, applico il 30% di sconto al carrello
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  carrello = carrello * 0.7
}

/* controllo se la somma del carrello è minore o uguale a 100. Se lo è applico i costi di spedizione alla variabile "prezzoTotale" e stampo il valore che serve per avere la spedizione gratis,
altrimenti il prezzo totale resta uguale al prezzo del carrello */
let prezzoTotale = 0
if (carrello <= 100) {
  prezzoTotale = carrello + shippingCost
  console.log("Il valore del carrello è di " + parseFloat(carrello).toFixed(2) + "€!")
  console.log("Mancano " + parseFloat(100 - carrello).toFixed(2) + "€ per avere la spedizione gratuita!");
  console.log("Il prezzo totale è di " + parseFloat(prezzoTotale).toFixed(2) + "€");
} else {
  prezzoTotale = carrello
  console.log("Il valore del carrello è superiore a 100.00€!")
  console.log(utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " ha diritto alla spedizione gratis!")
  console.log("Il prezzo totale è di " + parseFloat(prezzoTotale).toFixed(2) + "€");
}

// aggiungo gli utenti ad un array chiamato "utenti" tramite .push
let utenti = []
utenti.push(marco, paul, amy, gaetano)
// per ogni utente nell'array "utenti" controllo con un loop se sono ambassadors e stampo "NOME COGNOME è/non è un ambassador"
for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    console.log("");
    console.log(utenti[i].name + " " + utenti[i].lastName + " è un ambassador")
  } else {
    console.log("");
    console.log(utenti[i].name + " " + utenti[i].lastName + " non è un ambassador")
  }
}

// controlla nell'array "utenti" se gli utenti sono ambassador. Se lo sono, li aggiungo ad un nuovo array chiamato "soloAmbassadors"
let soloAmbassadors = []
for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    soloAmbassadors.push(utenti[i])
  }
}