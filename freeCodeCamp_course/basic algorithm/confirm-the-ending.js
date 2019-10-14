function confirmEnding(str, target) {
      //"Never give up and good luck will find you."
  // -- Falcor
  let i=0, cont=0;
  let reverseBig = str.split('').reverse();
  let reverselittle = target.split('').reverse();
  while(i<target.length){
        if(reverseBig[i]==reverselittle[i])
      cont++;
     i++; 
  }
  //variaveis que retornam o parametro passado como um array com a string invertida, depois um loop que tem como condição o tamanho do parametro
  //target. depois verifica se target e string tem os mesmos valores e incrementa um contador.
  return cont==target.length ? true : false;
  //um operador ternario que verificar se cont é  igual ao tamanho do parametro target e retorna true ou false.
  //o objetivo da função é verificar se  a frase termina com o parametro passado 
}

confirmEnding("Bastian", "n");

/* better solution
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  //chama a funcao slice que retorna uma parte da string a partir dos parametros passados e verifica se a substring é igual ao parametro target
}

confirmEnding("He has to give me a new name", "name");
*/