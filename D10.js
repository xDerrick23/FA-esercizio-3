/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// Dichiarazione e assegnazione della variabile "sum"
var sum = 10 + 20;

// Stampiamo il valore di "sum" nella console
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// Generazione di un numero casuale compreso tra 0 e 20
var random = Math.floor(Math.random() * 21);

// Stampiamo il valore di "random" nella console
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// Creazione della variabile "me" come oggetto con le proprietà specificate

var me = {
  name: 'Dino',
  surname: 'Di Diodoro',
  age: 23
};

// Stampiamo l'oggetto "me" nella console
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
// Creazione della variabile "me" come oggetto con le proprietà specificate
var me = {
  name: 'Dino',
  surname: 'Di Diodoro',
  age: 23
};

// Rimozione della proprietà "age" dall'oggetto "me"
delete me.age;

// Stampiamo l'oggetto "me" nella console per verificare che la proprietà "age" sia stata rimossa
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
// Creazione della variabile "me" come oggetto con le proprietà specificate
var me = {
  name: 'Dino',
  surname: 'Di Diodoro',
};

// Aggiunta dell'array "skills" all'oggetto "me"
me.skills = ["html", "css", "javascript"];

// Stampiamo l'oggetto "me" nella console per verificare che l'array "skills" sia stato aggiunto correttamente
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
// Creazione della variabile "me" come oggetto con le proprietà specificate, inclusa la proprietà "skills" come array
var me = {
  name: 'Dino',
  surname: 'Di Diodoro',
  skills: ["html", "css", "javascript"]
};

// Aggiunta di un nuovo elemento all'array "skills"
me.skills.push("React");

// Stampiamo l'oggetto "me" nella console per verificare che il nuovo elemento sia stato aggiunto correttamente
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
// Creazione della variabile "me" come oggetto con le proprietà specificate, inclusa la proprietà "skills" come array
var me = {
  name: 'Dino',
  surname: 'Di Diodoro',
  skills: ["html", "css", "javascript", "React"]
};

// Rimozione dell'ultimo elemento dall'array "skills"
me.skills.pop();

// Stampiamo l'oggetto "me" nella console per verificare che l'ultimo elemento sia stato rimosso correttamente
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
// Definizione della funzione "dice" che genera un numero casuale tra 1 e 6
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Utilizziamo la funzione per ottenere un numero casuale tra 1 e 6 e stampiamo il risultato nella console
var result = dice();
console.log("Il risultato del lancio del dado è: " + result);
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
// Definizione della funzione "whoIsBigger" che restituisce il numero maggiore tra due numeri
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Esempio di utilizzo della funzione con due numeri e stampa del risultato nella console
var firstNumber = 15;
var secondNumber = 27;
var result = whoIsBigger(firstNumber, secondNumber);
console.log("Il numero maggiore tra " + firstNumber + " e " + secondNumber + " è: " + result);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
// Definizione della funzione "splitMe" che suddivide una stringa in un array di singole parole
function splitMe(str) {
  return str.split(" ");
}

// Esempio di utilizzo della funzione con una stringa e stampa del risultato nella console
var myString = "I love coding";
var resultArray = splitMe(myString);
console.log(resultArray);
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
// Definizione della funzione "deleteOne" che rimuove il primo o l'ultimo carattere in base al valore booleano
function deleteOne(str, bool) {
  if (bool === true) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}

// Esempio di utilizzo della funzione con una stringa e un valore booleano, stampando il risultato nella console
var myString = "example";
var booleanValue = true;
var result = deleteOne(myString, booleanValue);
console.log(result);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
// Definizione della funzione "onlyLetters" che rimuove le cifre numeriche dalla stringa
function onlyLetters(str) {
  return str.replace(/\d/g, '');
}

// Esempio di utilizzo della funzione con una stringa e stampa del risultato nella console
var myString = "I have 4 dogs";
var result = onlyLetters(myString);
console.log(result);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
// Definizione della funzione "isThisAnEmail" che controlla se una stringa è un valido indirizzo email
function isThisAnEmail(str) {
  // Utilizziamo un'espressione regolare per il controllo dell'indirizzo email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(str);
}
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const today = new Date();
  const dayIndex = today.getDay();
  return days[dayIndex];
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
// Funzione per generare un numero casuale tra 1 e 6
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollTheDices(num) {
  var values = [];
  var sum = 0;
  for (var i = 0; i < num; i++) {
    var currentValue = dice();
    sum += currentValue;
    values.push(currentValue);
  }
  return {
    sum: sum,
    values: values
  };
}
var result = rollTheDices(3);
console.log(result);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  var today = new Date(); // Oggetto data per la data odierna
  var startDate = new Date(date); // Oggetto data per la data specificata
  var timeDiff = Math.abs(today.getTime() - startDate.getTime()); // Differenza di tempo in millisecondi
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Conversione della differenza in giorni
  return diffDays;
}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// Funzione per verificare se oggi è il tuo compleanno
function isTodayMyBirthday(birthday) {
  var today = new Date(); // Oggetto data per la data odierna
  var birthDate = new Date(birthday); // Oggetto data per la data di compleanno

  // Confrontiamo giorno, mese e anno per verificare se è il compleanno
  return (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth() &&
    today.getFullYear() !== birthDate.getFullYear()
  );
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
  }
  return obj;
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let maxYear = 0;
  let newestMovie;

  for (let i = 0; i < movies.length; i++) {
    const currentYear = parseInt(movies[i].Year);
    if (currentYear > maxYear) {
      maxYear = currentYear;
      newestMovie = movies[i];
    }
  }

  return newestMovie;
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const yearsArray = movies.map((movie) => movie.Year);
  return yearsArray;
}
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/function sumAllTheYears(movies) {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
  return sum;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(array, index) {
  if (index > -1 && index < array.length) {
    array.splice(index, 1);
  }
  return array;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  return document.getElementById('container');
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTdElements() {
  return document.getElementsByTagName('td');
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTextInTdTags() {
  const tdElements = document.getElementsByTagName('td');
  for (let i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].textContent);
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  const linkElements = document.getElementsByTagName('a');
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].style.backgroundColor = 'red';
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addToMyList() {
  const myList = document.getElementById('myList');
  const newListItem = document.createElement('li');
  newListItem.textContent = 'Nuovo elemento della lista';
  myList.appendChild(newListItem);
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyMyList() {
  const myList = document.getElementById('myList');
  myList.innerHTML = '';
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTR() {
  const trElements = document.getElementsByTagName('tr');
  for (let i = 0; i < trElements.length; i++) {
    trElements[i].classList.add('test');
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let row = ' '.repeat(height - i) + '*'.repeat(2 * i - 1);
    console.log(row);
  }
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];
