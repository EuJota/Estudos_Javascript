let final;
let factoryCost , impostPercentual, distributorPercentual;

let constructCar = (factoryCost, impostPercentual, distributorPercentual)=>{
    final = factoryCost + ((impostPercentual*factoryCost)/100)+ ((distributorPercentual*factoryCost)/100);
    return final;
}