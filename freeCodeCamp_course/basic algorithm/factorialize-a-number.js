function factorialize(num) {
      let factor=1;
      if(num>=0){
        while(num>0){
          factor*=num;
          num--;
    }
    return factor;
  }else{
        return "Choose a number greater  than or equal to zero!"
  } 
}

factorialize(5);

/*better code
  function factorialize(num) {
        if (num === 0) { return 1; }
    return num * factorialize(num-1);
  }

Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. 
If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. 
If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow.

*/