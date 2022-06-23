// TRACCIA
// Creare ciclo FOR da 1 a 100
// Stampare ogni numero in console
// SE è un multiplo di 3 stamperà "Fizz" al posto del numero
// SE è un multiplo di 5 stamperà "Buzz" al posto del numero
// SE è un multiplo sia di 3 che di 5 stamperà "FizzBuzz" al posto del numero
// #1 Bonus: aggiungere ogni elemento in un cotenitore nel DOM
// #2 Bonus: applicare stili differenti agli elementi aggiunti al DOM



// Creo un ciclo FOR da 1 a 100
for (let i = 1; i <= 100; i++) {

  // Sono state inserite le verifiche in maniera decrescente rispetto alla traccia poiché:
  // SE è un multiplo di 3 e 5 entrerà subito ed eviterà di entrare anche nel 3 e nel 5.
  // In caso contrario sarà solo o multiplo di 3 o di 5.
  // In caso non fosse multiplo di nessuno si andrà direttamente alla fine stampando solo il numero
  

  // SE è un multiplo sia di 3 che di 5 stamperà la stringa "FizzBuzz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ | ciclo x15: " + i)
  }
  // SE è un multiplo di 3 stamperà la stringa "Fizz"
  else if (i % 3 == 0) {
    console.log("FIZZ | ciclo x3: " + i)
  } 
  // ALTRIMENTI SE è un multiplo di 5 stamperà la stringa "Buzz"
  else if (i % 5 == 0) {
    console.log("BUZZ | ciclo x5: " + i)
  } else {
    // Stampo il numero di ogni ciclo in console
    console.log("ciclo " + i)
  }


}