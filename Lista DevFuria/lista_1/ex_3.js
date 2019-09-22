let juros;
let capital; 
let period;
let taxas;

let calcJuros = (capital, period, taxas)=>{
    juros = capital * ((taxas)/100) * period;
    return juros;
}