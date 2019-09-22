let celsius;
let fahren;

let celciusToFahr = (celcius)=>{
    fahren = (celcius/5)*9;
    return fahren + 32;
}

let fahrToCelc = (fahren)=>{
    celsius = ((fahren - 32)/9)*5;
}