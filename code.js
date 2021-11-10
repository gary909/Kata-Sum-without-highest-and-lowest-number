function sumArray(array) {
    var sum = 0;
    var lowNum = Math.min(...array);
    var highNum = Math.max(...array);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    var newArray = array.reduce(reducer);
    // if (array.length <= 1 ){
    //     return 0;
    // } else {
    //     for (var i = 0; i < array.length; i++){
    //         sum = sum + array[i];
    //     }
    // }
    return newArray - lowNum - highNum;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // Returns 16
console.log(sumArray([ 1, 1, 11, 2, 3 ])); // Returns 6
console.log(sumArray([ 1])); // Returns 0
console.log(sumArray([])); // Returns 0