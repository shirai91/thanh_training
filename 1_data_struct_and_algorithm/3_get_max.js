function getMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};
var array = [1, 4, 435, 66, 786, 34]
console.log(getMax(array));