const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
 const squareList = (arr) => {
    const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 )
                               .map( (num) => Math.pow(num, 2) );
         return squaredIntegers;
    };

    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);