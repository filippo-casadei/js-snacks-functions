/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array 
con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function nuovoArray(array) {
    let arrayVuoto = [];
    for (let i = 0; i < array.length; i++) {
    arrayVuoto.push(array[i][0])
    }
    return arrayVuoto

}

// Invoca la funzione qui e stampa il risultato in console

console.log(nuovoArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]