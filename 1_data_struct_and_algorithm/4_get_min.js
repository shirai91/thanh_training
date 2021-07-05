function getMin(array1) {
    var min = array1[0];
    for (var i = 0; i < array1.length - 1; i++) {
        if (array1[i] < min) {
            min = array1[i];
        }
    }
    return min;
};
var array1 = [-1, -2, -3, 4, 6, 8];
console.log(getMin(array1));