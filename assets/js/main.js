console.log('It works');

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

*/


//Create random numbers array
const randomNum = []

//Generate 5 random numbers

//-Create number generation function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//-Create a cycle to generate the numbers
for (let i = 1; i <= 5; i++) {
    let number = getRandomNum(1, 50)

    //-Push the numbers into an array
    randomNum.push(number)
       
}
//-Get dom element to stamp within
let pageNumEl =  document.querySelector('span')

//-Stamp numbers in the page
pageNumEl.innerHTML = `${randomNum[0]}, ${randomNum[1]}, ${randomNum[2]},
${randomNum[3]}, ${randomNum[4]}`

//Remove numbers from page

//Show 5 inputs

//Compare the user's numbers with the generated numbers regardless of the order

//Stamp results
