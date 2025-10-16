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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-Create a cycle to generate the numbers
for (let i = 1; i <= 5; i++) {
    let number = getRandomNum(1, 50)

    //-Push the numbers into an array
    randomNum.push(number)

}
console.log(randomNum);

//-Get dom elements to stamp within
let pageNumEl = document.querySelector('span')
let formEl = document.querySelector('form')

//-Stamp numbers in the page
pageNumEl.innerHTML = `${randomNum[0]}, ${randomNum[1]}, ${randomNum[2]},
${randomNum[3]}, ${randomNum[4]}`

//Remove numbers from page after 30 seconds
function hideNum() {
    pageNumEl.innerHTML = ''

    //Show 5 inputs
    formEl.classList.replace('d-none', 'd-flex')
}
setTimeout(hideNum, 3000)

//Save user's number into an array

formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstNumEl = document.getElementById('first-number')
    const secondNumEl = document.getElementById('second-number')
    const thirdNumEl = document.getElementById('third-number')
    const fourthNumEl = document.getElementById('fourth-number')
    const fifthNumEl = document.getElementById('fifth-number')

    const firstNum = Number(firstNumEl.value)
    const secondNum = Number(secondNumEl.value)
    const thirdNum = Number(thirdNumEl.value)
    const fourthNum = Number(fourthNumEl.value)
    const fifthNum = Number(fifthNumEl.value)


    /**
     * Create an array whith input numbers
     * @param {Num1} num1 
     * @param {Num2} num2 
     * @param {Num3} num3 
     * @param {Num4} num4 
     * @param {Num5} num5 
     * @returns An array of numbers
    */
    function getNumArray(num1, num2, num3, num4, num5) {
        const numArray = []

        numArray.push(num1)
        numArray.push(num2)
        numArray.push(num3)
        numArray.push(num4)
        numArray.push(num5)

        return numArray
    }

    const userNums = getNumArray(firstNum, secondNum, thirdNum, fourthNum, fifthNum)
    console.log(userNums);

    //Check if user input the same number

    const duplicateNum = userNums

    
    for (let i = 0; i < userNums.length; i++) {

        duplicateNum.splice(i, 1)
        console.log(duplicateNum);
        

        if (duplicateNum.includes(userNums[i], 0)) {
            console.log('duplicate');
            break
        }
    }



    //Compare the user's numbers with the generated numbers regardless of the order
    let guesses = 0
    
    for (let i = 0; i < userNums.length; i++) {
    const number = userNums[i];

    if ((number === randomNum[0]) || (number === randomNum[1]) || (number === randomNum[2]) ||
        (number === randomNum[3]) || (number === randomNum[4])) {
        guesses++
    }
}
//Stamp results
const guessedEl = document.querySelector('.results')
console.log(guessedEl);

guessedEl.innerHTML = `You guessed ${guesses} numbers!`
    

})