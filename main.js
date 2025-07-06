const Kilometri = Number(prompt("Quanti Kilometri desideri percorrere?"));
console.log(Kilometri);
const anni = Number(prompt("Quanti anni hai?"));
console.log(anni);
let price = 0.21 * Kilometri;
console.log(price);

if (anni < 18){
    let scontoMinori = price - (price * 20 /100);
    alert(`Il costo del tuo biglietto è di ${scontoMinori.toFixed(2)} €`);
}

else if (anni >= 65){
    let scontoAnziani = price - (price * 40 /100);
    alert(`Il costo del tuo biglietto è di ${scontoAnziani.toFixed(2)} €`);
}

else {
    alert(`Il costo del tuo biglietto è di ${price.toFixed(2)} €`);
}
