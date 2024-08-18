function comparestr(str1, str2) {
    if (str1.match(str2)) {
       return true;
    } else {
        return false;
    }
}
let r = comparestr(hi hello , hi hello);
console.log(r);