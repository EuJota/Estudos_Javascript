let username = "007";
let userCheck = /^[a-z]{2,}\\d*$/i; 
let result = userCheck.test(username);
console.log(userCheck.test(username));

/*Explain:The only numbers in the username have to be at the end. \\d$ There can be zero or more of them at the end. *\n\n    /\\d*$/;\n\n    Username letters can be lowercase and uppercase. i\n\n    /\\d*$/i;\n\n    Usernames have to be at least two characters long. {2,} A two-letter username can only use alphabet letter characters. ^[a-z]\n\n    /^[a-z]{2,}\\d*$/i;\n\n*/"}