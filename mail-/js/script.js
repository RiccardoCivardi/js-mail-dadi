/* **Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// METODO CON ARRAY.INCLUDES

// prendo gli elementi che mi servono dal dom
const email = document.querySelector('[name="email"]');
const button = document.querySelector('[type="button"]');
const card = document.querySelector('.card.col');
// creo elemento output da inserire nel dom
const output= document.createElement('output');

// array delle email per il confronto
const emailList = [
  "riccardo@icloud.com",
  "riccard@icloud.com",
  "riccar@icloud.com",
  "ricca@icloud.com",
  "ric@icloud.com",
  "civardi@icloud.com",
  "civard@icloud.com",
  "civar@icloud.com",
  "civa@icloud.com",
  "civ@icloud.com",
];


// al click sul bottone parte la funzione
button.addEventListener('click', function(){
  // prendo il valore dell'input
  const emailUser = email.value;
  
  // azzero la verifica precedente
  output.innerHTML = '';
  
  //assegno un po di classi css ad output per rendelo bello
  output.className = 'd-block mx-auto mb-5 fs-4 text-uppercase fw-bold text-white bg-dark py-2 px-3 rounded-2';

  // se l'array contine l'email...
  if (emailList.includes(emailUser)) output.innerHTML = "Puoi accedere";
  // se non la contiene ... 
  else output.innerHTML = "non puoi accedere";
  
  // inserisco l'output nell'html
  card.append(output);
  
});

// METODO CON FOR ARRAY.LENGHT

// prendo gli elementi che mi servono dal dom
const email2 = document.querySelector('[name="email2"]');
const button2 = document.querySelector('#button');
const card2 = document.querySelector('.card:last-child');

// creo elemento output da inserire nel dom
const output2= document.createElement('output');

// array delle email per il confronto
const emailList2 = [
  "riccardo@icloud.com",
  "riccard@icloud.com",
  "riccar@icloud.com",
  "ricca@icloud.com",
  "ric@icloud.com",
  "civardi@icloud.com",
  "civard@icloud.com",
  "civar@icloud.com",
  "civa@icloud.com",
  "civ@icloud.com",
];

button2.addEventListener('click', function(){ 

  // creo variabile booleana per confermare o meno la presenza dell' email
  let isEmail = false
  
  // percorro l'array alla ricerca della email
  for(let i = 0; i < emailList2.length; i++){
    if(email2.value === emailList2[i]) isEmail = true;
  }

  // azzero la verifica precedente
  output2.innerHTML = '';
  
  //assegno un po di classi css ad output per rendelo bello
  output2.className = 'd-block mx-auto mb-5 fs-4 text-uppercase fw-bold text-white bg-dark py-2 px-3 rounded-2';
 

  // se c'è l'email
  if(isEmail) output2.innerHTML = "Puoi accedere";
  // se non c'è
  else output2.innerHTML = "non puoi accedere";
  
  // inserisco l'output nell'html
  card2.append(output2);

});
