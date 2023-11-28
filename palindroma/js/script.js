//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//creo la funzione
function isPalindroma(word){
    //creo all'interno della funzione un if che permettera di verficare se la parola e' palindroma
    /* per fare cio applico diverse funzioni a word che mi permettono di trasformala in un arrey '.split'
    poi di invertire la posizione degli elementi '.reverse', '.join'ricompone la stringa
    e infine applico ad entrambi i membri '.toLowerCase' per ignorare la presenza di maiuscole */
    if(word.toLowerCase() ==  word.split('').reverse().join('').toLowerCase()){
        return true
    }
    else{
        return false
    }
    
}
//dichiaro la variabile parola che mi permettera di chidere all utente la parola da verificare
let parola = prompt('inserire una parola')
//applico la funzione con la variabile parola scelta dall'utente
if( isPalindroma(parola)){
    alert('la parola e\' palindroma')
}
else{
    alert('la parola non e\' palindroma')
}








