/* **Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

 
//prendo quello che mi serve dell'html
const buttonStart = document.querySelector('button');
const card = document.querySelector('div div div');
// creo output per stampare il vincitore in html 
const outputWinner = document.createElement('output');
// creo output per i numeri estratti
const numbersSelect = document.createElement('output');


//al click sul bottone
buttonStart.addEventListener('click', function(){
  //genero il numero dell'utente e del computer
  const numberUser = Math.ceil(Math.random() * 6); 
  const numberComputer = Math.ceil(Math.random() * 6); 

  // faccio il reset dell'output
  outputWinner.innerHTML = '';
  numbersSelect.innerHTML = '';

  // assegno le classi css agli output per stilarli 
  outputWinner.className = 'd-block mx-auto mb-5 fs-4 text-uppercase fw-bold text-white bg-magenta mt-3 py-2 px-3 rounded-2';
  numbersSelect.className = 'mx-auto fs-5 text-white bg-dark rounded-2 py-2 px-3';

  // trovo il vincitore
  if(numberUser === numberComputer) {
    outputWinner.innerHTML = 'Parit&agrave;';
  } else if(numberUser > numberComputer) {
    outputWinner.innerHTML = "Vince l'utente";
  } else {
    outputWinner.innerHTML = "Vince il computer";
  }

  //creo il contenuto html delle giocate
  numbersSelect.innerHTML = `
    <i class="display-5 me-1 fa-solid fa-user"></i> 
    ${numberUser}
    <i class="display-5 ms-5 me-1 fa-solid fa-computer"></i>
    ${numberComputer}
  `;

  // appendo gli output in html
  card.append(numbersSelect, outputWinner);

});

/* -------------- LAVORO PERSONALE ------------------- */

// ALLENAMENTO SUGLI ARRAY 

/* **Somma dei dadi**
L'utente sceglie quanti dadi lanciare.
Generare un numero random da 1 a 6 per ogni lancio, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi ha la somma più alta.*/

// prendo gli elementi dal dom
const buttonStart2 = document.querySelector('div.card:last-child button');
const card2 = document.querySelector('div.card:last-child');
const diceInput = document.querySelector('[name="dice-rolls"]');
// creo output per stampare il vincitore in html 
const outputWinner2 = document.createElement('output');
// creo output per somma numeri estratti
const numbersSum = document.createElement('output');


// al click sul bottone
buttonStart2.addEventListener('click', function(){
   
  // faccio il reset dell'output
  outputWinner2.innerHTML = '';
  numbersSum.innerHTML = '';

  // assegno le classi css agli output per stilarli 
  outputWinner2.className = 'd-block mx-auto mb-5 fs-4 text-uppercase fw-bold text-white bg-magenta mt-3 py-2 px-3 rounded-2';
  numbersSum.className = 'mx-auto fs-5 text-white bg-dark rounded-2 py-2 px-3';

  // se il numero di dadi inserito è positivo eseguo il codice 
  if(parseInt(diceInput.value) > 0) {
    //genero le x estrazioni per il giocatore e per l'utente e le salvo in due array, dopo sommo tutti i numeri (volendo posso evitare di usare due array ma lo faccio per allenamento :-) )
    const numbersUser2 = [];
    const numbersComputer2 = [];
    let sumUser = 0;
    let sumComputer = 0;
    
    for(let i = 1; i <= diceInput.value; i++){
      numbersUser2.push(Math.ceil(Math.random() * 6));
      numbersComputer2.push(Math.ceil(Math.random() * 6));
    };

    // eseguo la somma delle estrazioni
    
    for(let i = 0; i < numbersUser2.length; i++){
      sumUser += numbersUser2[i];
      sumComputer += numbersComputer2[i]; 
    };

    // trovo il vincitore
    if(sumUser === sumComputer) {
    outputWinner2.innerHTML = 'Parit&agrave;';
    } else if(sumUser > sumComputer) {
    outputWinner2.innerHTML = "Vince l'utente";
    } else {
    outputWinner2.innerHTML = "Vince il computer";
    }

    //creo il contenuto html delle giocate
    numbersSum.innerHTML = `
      <i class="display-5 me-1 fa-solid fa-user"></i> 
      ${sumUser}
      <i class="display-5 ms-5 me-1 fa-solid fa-computer"></i>
      ${sumComputer}
    `;

    // appendo gli output in html
    card2.append(numbersSum, outputWinner2);

  } 
  // altrimenti stampo un messaggio di errore
  else {
    numbersSum.innerHTML = `
      <span class="fs-7"> Scegli un numero di lanci maggiore di 0</span>
    `;
    outputWinner2.innerHTML = 'errore';
    
    // appendo l' output in html
    card2.append(numbersSum, outputWinner2);

  }

});

 
