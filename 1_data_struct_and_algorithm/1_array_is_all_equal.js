function isAllEqual(array) {
    for (var i = 0; i <= array.length - 2; i++)
        if (array[i] === array[i + 1]) { }
        else {
            return false;
        }
    return true;
}
var array = [1, 1, 2, 1, 1, 1]
console.log(isAllEqual(array));