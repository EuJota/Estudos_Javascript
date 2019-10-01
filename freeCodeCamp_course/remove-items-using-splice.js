function sumOfTen(arr) {
    arr.splice(4,2);
    arr.splice(0,1);
    arr.splice(1,1);
    
    //estudar esse reduce aqui
    return arr.reduce((a, b) => a + b);
}
    
    console.log(sumOfTen([2, 5, 1, 5, 2, 1]));