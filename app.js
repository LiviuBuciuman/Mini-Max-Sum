const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);

function miniMaxSum(arr) {
    let min = 0, max = 0, minIndex = 0, maxIndex = 0, minSum = 0, maxSum = 0;
    min = Math.min(...arr);
    max = Math.max(...arr);
    minIndex = arr.indexOf(min);
    maxIndex = arr.indexOf(max);
    arr.forEach(function (item, index) {
        if (index !== minIndex) {
            maxSum += item;
        }
        if (index !== maxIndex) {
            minSum += item;
        }
    });
    console.log(minSum, maxSum);
}