console.log('Js ok')


const numberList = document.getElementById('number-list');

const myArray = [];

while (myArray.length < 5) {

    const numRandom = Math.floor(Math.random() * 100 + 1);

    if (!myArray.includes(numRandom)) {

        myArray.push(numRandom);

    }
}

console.log(myArray);

numberList.innerHTML = myArray;

const reset = setTimeout(function () {

    numberList.innerHTML = '';

}, 3000);


const userArray = [];

const emptyBox = setTimeout(function () {

    while (userArray.length < 5) {

        const userNumbers = parseInt(prompt('Inserisci i numeri che ricordi'));

        userArray.push(userNumbers);

    }

    for (let i = 0; i < userArray.length; i++) {

        if (userArray[i] === myArray[i]) {
            console.log("Hai indovinato!");
            console.log(`
       Numero random ${myArray[i]}, Numero inserito ${userArray[i]}
               `);
        } else {
            console.log("Ritenta!");
            console.log(`
       Numero random ${myArray[i]}, Numero inserito ${userArray[i]}
               `);
        }
    }

}, 3500);

console.log(userArray);
