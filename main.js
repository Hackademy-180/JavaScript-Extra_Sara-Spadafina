// ESERCIZIO 1 : 
// Scrivi un programma che chieda all’utente di inserire un numero intero. 
// Questo numero deve essere usato per creare una lista di numeri che vanno da 1 a N. 
// Per ogni numero della lista, il programma deve stampare se è pari o dispari.
// esempio: 
// 1 è dispari
// 2 è pari
// 3 è dispari
// 4 è pari   ecc ecc

// let N = prompt("inserire un numero intero:")

// for(let i = 1; i <= N; i++){
//     if(i%2 == 0 ){
//         console.log( `${i} è pari`)
//     } else{
//         console.log( `${i} è dispari`)
//     }
// }


// ESERCIZIO 2 :
// Scrivi un programma che: chieda all’utente di inserire un numero intero N.
// Stampi tutti i numeri da 1 a N.
// Per ogni numero, segnali se si tratta di un multiplo di 3 con un messaggio speciale (ad esempio: “è multiplo di 3”)

// let N = prompt("inserire un numero intero:")

// for(let i = 1; i <= N; i++){
//     if(i%3 == 0 ){
//         console.log( `${i} è multiplo di 3`)
//     } else{
//         console.log( `${i}`)
//     }
// }



// ESERCIZIO 3 :
// Simulate una sala giochi , dove 2 utenti si devono sfidare ad una sfida di dadi , 
// alla fine dovere decretare il vincitore della sfida oppure se la sfida finisce in parita'. 

// let utente1 = 0;
// let utente2 = 0;



for(let i = 1; i <= 1; i++){
   
    utente1 = Math.floor(Math.random() * (6 - 1 + 1) + 1); 
        console.log(`punteggio giocatore 1: ${utente1}`)

    utente2 = Math.floor(Math.random() * (6 - 1 + 1) + 1); 
        console.log(`punteggio giocatore 2: ${utente2}`)
}

if(utente1 < utente2){
    console.log("utente 2 ha vinto")

}else if(utente2 < utente1){
    console.log("utente 1 ha vinto")

}else if(utente2 = utente1){
    console.log("parita'")
}


// ESERCIZIO DA COLLOQUIO TECNICO :
// Scrivere un programma che permetta di stampare in console tutti i numeri da 1 a N: 
// - N dovra’ rappresentare il parametro massimo 
// - tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz', 
// - tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// - e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'

// let n = 17;


// for(let i = 1; i <= n; i++){

// if(i%15 == 0 ){
//      console.log( `fizzBuzz`);

// } else if(i%5 == 0 ){
//      console.log( `Buzz`);

// } else if(i%3 == 0 ){
//     console.log( `Fizz`);

// } else{
//      console.log( i);
// }
// }

