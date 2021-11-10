function sumArray(array) {
    var lowNum = Math.min(...array);
    return lowNum;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // Returns 16