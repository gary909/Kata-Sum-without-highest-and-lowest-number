function sumArray(array) {
    var sum = 0;
    if (array == null || array.length <= 1){ // check if array is full
        return 0;
    } else {
        for (var i = 0; i < array.length; i++){
            sum = sum + array[i]; // total the array
        }
    }
    var lowNum = Math.min(...array); // find lowest num
    var highNum = Math.max(...array); // find highest num
    return sum - lowNum - highNum; // subtract high/lowest from total
}

console.log(sumArray([ 6, 2, 1, 8, 10 ])); // Returns 16
console.log(sumArray([ 1, 1, 11, 2, 3 ])); // Returns 6
console.log(sumArray([ 1])); // Returns 0
console.log(sumArray([])); // Returns 0
console.log(sumArray([2, 2])); // Returns 0
console.log(sumArray(null)); // Returns 0