function quickCheck(arr, elem) {
    return arr.indexOf(elem)!= -1 ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));