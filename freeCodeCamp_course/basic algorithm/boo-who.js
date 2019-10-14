function booWho(bool) {
      // What is the new fad diet for ghost developers? The Boolean.
      return typeof bool === 'boolean' ? true : false;
      //- verifica se o parametro recebido é um booleano e retorna verdadeiro ou falso
}

booWho(false);


/*better solution
 function booWho(bool) {
          return typeof bool === 'boolean';
    -verifica o tipo da variavel, se boolean retorna verdadeiro ou falso
    }
*/