let arr=[30,50,20,54,9]
console.log(arr.length)
console.log(arr[1])
arr[2] = 80;
console.log(arr)
console.log("print elements in a array")
for (var index = 0; index < arr.length; index++) {
    console.log("index:",index, " value:",arr[index])
}
console.log("print elements in a array reverse order based on index")
for (var index = arr.length-1; index >= 0; index--) {
    console.log("index:",index, " value:",arr[index])
}
console.log("print elements in a array at even index")
for (var index = 0; index < arr.length; index++) {
    if (index%2 == 0){
        console.log("index:",index, " value:",arr[index])
    }
   
}
// dev4daishu@gmail.com