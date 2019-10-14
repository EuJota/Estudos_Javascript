function truncateString(str, num) {
     // Clear out that junk in your trunk
  return num < str.length ? str.slice(0,num).concat("...") : str;
    // um operador ternario que verifica se o parametro de numero é menor que o tamanho da string, se sim 
    //retorna a função que corta a string do tamanho do parametro e concatena com ..., se não retorna a string completa
}
 
truncateString("A-tisket a-tasket A green and yellow basket", 8);