function htmlColorNames(arr) {
    let color = ["DarkSalmon", "BlanchedAlmond"];
    arr.splice(0,2,...color);  
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));