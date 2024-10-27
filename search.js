import {
    sortedArray100,
    unsortedArray10,
    unsortedArray5,
    unsortedArray100,
    unsortedArray200
} from './data.js'

function binarySearch(array, valueToFind) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    while (minIndex <= maxIndex) {
        let midIndex = Math.floor((maxIndex + minIndex) / 2);
        let guess = array[midIndex];
        
        if (guess === valueToFind) {
            return `искомое значение находится на позиции ${midIndex}`;
        }
        if (guess < valueToFind) {
            minIndex = midIndex + 1;
        } else {
            maxIndex = midIndex - 1;
        }
    }
    return `искомое значение ${valueToFind} отсутствует в массиве`;
}

