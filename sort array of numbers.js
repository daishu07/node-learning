for (var i = 1;i <Array.length;i++) {
    for (var j = 0;j < i;j++){
        if (Arr[i] < Arr[j]){
            var x = Arr[i];
             Arr[i] = Arr[j];
             Arr[j] = x;
       }
    }
}
var arr = [3,5,7,0,4,6,7,2,4]
console.log(arr);