function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === key) {
            return i 
        }
    }
    return -1
}
var arr = [ 3,5,6,2,5,3,9,7,0,2];
var r = linearSearch(arr,0);
console.log(r);