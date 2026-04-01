/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali 
contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    let contenitoreVocali = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === "a" ||
            stringa[i] === "e" ||
            stringa[i] === "i" ||
            stringa[i] === "o" ||
            stringa[i] === "u") {
        contenitoreVocali++  
        }
    }
    return contenitoreVocali
}


// Invoca la funzione qui e stampa il risultato in console

contaVocali("javascript");

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(contaVocali(word));