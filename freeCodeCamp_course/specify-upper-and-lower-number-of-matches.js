
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\\sno/; 
let result = ohRegex.test(ohStr);
console.log(ohRegex.test(ohStr));