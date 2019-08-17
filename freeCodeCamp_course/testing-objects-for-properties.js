var myObj = { 
    gift: "pony",  
    pet: "kitten",  
    bed: "sleigh"
};

function checkObj(checkProp) {
    var condition = myObj.hasOwnProperty(checkProp);
    if (condition === true)
        return myObj[checkProp];
    else
        return "Not Found";
}
checkObj("gifts");