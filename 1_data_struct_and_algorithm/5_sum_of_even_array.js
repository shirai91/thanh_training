function sumOfEvenNumber(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum = sum + array[i]
        }
    }
    return sum;
};
var array = [2, 2, 2, 2, 2, 2];
console.log(sumOfEvenNumber(array));