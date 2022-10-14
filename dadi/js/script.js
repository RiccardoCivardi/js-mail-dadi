/* **Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

 
//prendo quello che mi serve dell'html
const buttonStart = document.querySelector('button');
const card = document.querySelector('div div div');
// creo output per stampare il vincitore in html 
const outputWinner = document.createElement('output');
// creo le due giocate da mostare in pagina
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

