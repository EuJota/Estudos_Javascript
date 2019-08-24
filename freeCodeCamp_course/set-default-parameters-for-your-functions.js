const increment = (par1, value=1) => {
    return value===null ? par1+value : par1+value;
}
console.log(increment(5, 2)); 
console.log(increment(5));