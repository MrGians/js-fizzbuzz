// TRACCIA
// Specifico le variabili globali 
// Creare ciclo FOR da 1 a 100
// Stampare ogni numero in console
// SE è un multiplo di 3 stamperà "Fizz" al posto del numero
// SE è un multiplo di 5 stamperà "Buzz" al posto del numero
// SE è un multiplo sia di 3 che di 5 stamperà "FizzBuzz" al posto del numero
// #1 Bonus: aggiungere ogni elemento in un cotenitore nel DOM
// #2 Bonus: applicare stili differenti agli elementi aggiunti al DOM


// Specifico le variabili globali
const squareContainer = document.getElementById("square-container");

let squareElement = '';

// Creo un ciclo FOR da 1 a 100
for (let i = 1; i <= 100; i++) {
  
  // Creo l'inizio dell'elemento
  squareElement += '<div class="square';
  

  // SE è un multiplo sia di 3 che di 5 stamperà la stringa "FizzBuzz"
  if (i % 3 == 0 && i % 5 == 0) {
    squareElement += ' fizzbuzz">';
    squareElement += 'FizzBuzz';

  }
  // ALTRIMENTI SE è un multiplo di 3 stamperà la stringa 'Fizz'
  else if (i % 3 == 0) {
    squareElement += ' fizz">';
    squareElement += 'Fizz';

  } 
  // ALTRIMENTI SE è un multiplo di 5 stamperà la stringa 'Buzz'
  else if (i % 5 == 0) {
    squareElement += ' buzz">';
    squareElement += 'Buzz';

  } else {
  // Stampo il numero di ogni ciclo
    squareElement += '">';
    squareElement += i;

  }

  // Creo la fine dell'elemento
  squareElement += '</div>';

  // Inserisco l'elemento del DOM
  squareContainer.innerHTML = squareElement;
}

