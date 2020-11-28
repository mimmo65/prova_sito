// Seleziono tutti i tag h1
var myHeading = document.querySelector('h1'); 
// Cambio il testo
myHeading.textContent = 'Hello world!'; 

/* al click si attiva l'alert
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

//aggiungeremo un'ulteriore immagine al nostro sito
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/prova.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Inserisci il tuo nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  /*Questa funzione utilizza la funzione prompt() che fa apparire
   un piccolo box di dialogo, un po' come alert(). 
   Questo prompt() però chiede all'utente di inserire dei dati, 
   salvandoli in una variabile dopo che l'utente ha premuto OK. 
   In questo caso chiediamo all'utente di inserire il proprio nome. 
   Dopo chiamiamo un'API chiamata localStorage che ci permette di 
   immagazzinare dati nel browser per poi recuperarli successivamente.
   Usiamo la funzione setItem() di localStorage per creare e immagazzinare
   un oggetto chiamato 'name', impostando il suo valore a quello della variabile myName 
   che contiene il dato inserito dall'utente. 
   Finalmente, impostiamo il textContent dell'elemento h1 a una stringa più il valore della variabile 
   myName che contiene il nome dell'utente.
   */
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
