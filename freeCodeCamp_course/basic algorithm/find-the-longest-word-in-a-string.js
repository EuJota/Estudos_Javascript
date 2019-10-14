//my first solution
function findLongestWordLength(str) {
      let cont=0;
      let longer=0;
      for(let i=0;i<str.length;i++){
        if(str[i]!=' '){
          cont++;
          if(cont>longer){
            longer=cont;
      }
    }else{
          cont=0;
    }
  }
  return longer;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//second solution 
function findLongestWordLength(str) {
    let words = str.split(' ');
    let longer=0;
    for(let i=0;i<words.length;i++){
      if(words[i].length>longer){
        longer = words[i].length;
      }
    }
    return longer;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //site solution
  function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }


