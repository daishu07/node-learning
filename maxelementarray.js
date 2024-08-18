function getMaxNumberArr(arr) {
    var max = arr[0];
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
           max = arr[index];
        }
    }
    return max;
} 
var data = [25,67,86,63,90];
var result = getMaxNumberArr(data);
console.log(result);