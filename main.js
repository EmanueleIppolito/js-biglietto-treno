const Kilometri = Number(prompt("Quanti Kilometri desideri percorrere?"));
console.log(Kilometri);
const anni = Number(prompt("Quanti anni hai?"));
console.log(anni);
let price = 0.21 * Kilometri;
console.log(price);

if (Number.isNaN(Kilometri) || Number.isNaN(anni) || anni === 0 || Kilometri === 0){
    alert(`I dati da te inseriti non risultano corretti`);
} else {
    if (anni < 18){
        price =  price - (price * 20 /100); 
    } else if (anni >= 65){
        price = price - (price * 40 /100);
    }
    alert(`Il costo del tuo biglietto è di ${price.toFixed(2)} €`);
}