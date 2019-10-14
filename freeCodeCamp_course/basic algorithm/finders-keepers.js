function findElement(arr, func) {
      let num=0, i=0, result=0;
      while(i<arr.length){
        if(func(arr[i])==true){
          result = arr[i]
          break;
      }
    i++;
    // loop para percorrer todo array e uma condicional if que chama a função passada como parametro que verifica se o numero é par
  }
  return result != undefined && result != 0 ? result : undefined;
  // - se o resultado do loop for diferente de undefined e de zero retorna o primeiro resultado, se nao retorna undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


/*Basic Solution

function findElement(arr, func) {
      let num = 0;
      
      for(var i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
          return num;
    }
  }
  
  return undefined;
}*