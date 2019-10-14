function repeatStringNumTimes(str, num) {
    // repeat after me
    let i=0;
    let strarr = [];
    if(num<0){
      return "";
    }
    while(i<num){
      strarr.push(str);
      i++;
    }
    return strarr.join('');
  }
  
  repeatStringNumTimes("abc", 3);
  
  /*Basic Code Solution:
  
  function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
   INTERMEDIATE
  function repeatStringNumTimes(str, num) {
    if(num < 0)
      return "";
    if(num === 1)
      return str;
    else
      return str + repeatStringNumTimes(str, num - 1);
  }
  If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another.. until eventually num is 1. And return that whole process.
  
  
  Advanced Code Solution:
  
  function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
  }
  
  repeatStringNumTimes("abc", 3);
  
  */