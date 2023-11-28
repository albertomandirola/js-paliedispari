/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//dichiaro la funzione genera numero random
function randomNumber(){
    let number = Math.floor(Math.random()*5 + 1)
    return number
}

//dichiaro la funzione somma a due variabili
function isEven(x,y){
    let result = (x+y)
    console.log(result)
    if(result%2 == 0){
        return true
    } 
    else{
        return false
    } 
}
//dichiaro le variabili che mi saranno utili nei cicli do while
let choice;
let flag = true;
//utilizzo il do while per fare controlli di inserimento
do{
    choice = prompt('pari o dispari ?')
    console.log(choice)
    if(choice.toLowerCase() == 'pari' || choice.toLowerCase() == 'dispari'){
        flag = false
    }
}while(flag)
//utilizzo il do while per fare controlli di inserimento
do{
    playerNumber = parseInt(prompt('inserisci un numero da 1 a 5 ?'))
    if(isNaN(playerNumber) || playerNumber > 5 || playerNumber < 1 ){
        flag = true
    }
    else{
        flag = false
    }
}while(flag)
let pcNumber = randomNumber()
console.log(pcNumber)
console.log(playerNumber)
let numberIsEven = isEven(pcNumber,playerNumber)
console.log(isEven)

if((choice == 'pari' && numberIsEven)||(choice == 'dispari' && !numberIsEven)){
    alert('hai vinto')
}
else{
    alert('ha vinto il pc')
}
