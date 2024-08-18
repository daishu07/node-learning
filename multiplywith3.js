function multiplywith3(){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 3;        
    }
    return arr;
}
var arr = [2,6,5,8,4];
let r = multiplywith3(arr);
console.log(r);