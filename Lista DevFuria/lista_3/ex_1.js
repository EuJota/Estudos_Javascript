let num;
let primo=1, d=2;
let aux = num/2;
// training js functions models
let getPrimoNumber = num =>{
    while(primo===1 && d<=aux){
        if(num%d===0)
            primo = 0;
        else
            d++;
    }

    return primo;
}


