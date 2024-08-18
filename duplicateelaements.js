function getDuplicate(arr) { 
    let duplicateArr = [];
    for (var index = 0; index < arr.length; index++) {
        for (var j = index + 1; j < arr.length; j++){
            if (arr[index]= arr[j]) {
                y = arr[index];
                duplicateArr.push(y);
            }
        }
    }
    return duplicateArr;
}
var data = [23,13,56,3,87,14];
var result = getDuplicate(data);
console.log(result);