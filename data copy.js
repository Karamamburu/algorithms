const sortedArray100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ];

const unsortedArray10 = [5, 2, 7, 6, 4, 1, 9, 8, 10, 3]

const unsortedArray5 = [3, 2, 4, 1, 5]

const unsortedArray100 = [
    53, 27, 34, 73, 61, 96, 90, 49, 12, 86,
    4, 32, 88, 28, 66, 21, 85, 39, 15, 2,
    78, 9, 50, 99, 7, 64, 42, 30, 20, 55,
    80, 47, 17, 76, 13, 84, 41, 93, 38, 16,
    59, 35, 72, 48, 29, 6, 95, 37, 68, 54,
    44, 97, 33, 100, 91, 70, 18, 1, 65, 3,
    60, 79, 24, 22, 14, 57, 11, 31, 36, 19,
    74, 67, 56, 43, 77, 26, 25, 40, 71, 8,
    45, 92, 83, 69, 63, 62, 5, 52, 58, 46,
    75, 10, 23, 81, 87, 89, 82, 98, 51, 94
];

const unsortedArray200 = [
    53, 27, 34, 73, 61, 96, 90, 49, 12, 86,
    4, 32, 88, 28, 66, 21, 85, 39, 15, 2,
    78, 9, 50, 99, 7, 64, 42, 30, 20, 55,
    80, 47, 17, 76, 13, 84, 41, 93, 38, 16,
    59, 35, 72, 48, 29, 6, 95, 37, 68, 54,
    44, 97, 33, 100, 91, 70, 18, 1, 65, 3,
    60, 79, 24, 22, 14, 57, 11, 31, 36, 19,
    74, 67, 56, 43, 77, 26, 25, 40, 71, 8,
    45, 92, 83, 69, 63, 62, 5, 52, 58, 46,
    75, 10, 23, 81, 87, 89, 82, 98, 51, 94,
    53, 27, 34, 73, 61, 96, 90, 49, 12, 86,
    4, 32, 88, 28, 66, 21, 85, 39, 15, 2,
    78, 9, 50, 99, 7, 64, 42, 30, 20, 55,
    80, 47, 17, 76, 13, 84, 41, 93, 38, 16,
    59, 35, 72, 48, 29, 6, 95, 37, 68, 54,
    44, 97, 33, 100, 91, 70, 18, 1, 65, 3,
    60, 79, 24, 22, 14, 57, 11, 31, 36, 19,
    74, 67, 56, 43, 77, 26, 25, 40, 71, 8,
    45, 92, 83, 69, 63, 62, 5, 52, 58, 46,
    75, 10, 23, 81, 87, 89, 82, 98, 51, 94
];


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
let countOfOperations = 0
function findSmallestElementIndex(array) {
    let smallestIndex = 0;
    let smallestElement = array[0];
    for (let i = 1; i < array.length; i++) {
        countOfOperations++
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(array) {
    let sortedArray = new Array()
    while (array.length > 0) {
        countOfOperations++
        let smallestIndex = findSmallestElementIndex(array)
        let smallestElement = array.splice(smallestIndex, 1)[0]

        sortedArray.push(smallestElement)
    }
    console.log(`Количество операций: ${countOfOperations}`)
    return sortedArray;
}

// arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
// console.log(arr)
// let removedElement = arr.splice(0, 1)
// console.log(removedElement)
// console.log(arr[0])


class SelectionSorter {
    array;
    sortedArray;
    operationCount;
    
    constructor(array) {
        this.array = array;
        this.sortedArray = [];
        this.operationCount = 0;
    }

    findSmallestElementIndex() {
        let smallestIndex = 0;
        let smallestElement = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            this.operationCount++;
            if (this.array[i] < smallestElement) {
                smallestElement = this.array[i];
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }

    sort() {
        while (this.array.length > 0) {
            this.operationCount++;
            let smallestIndex = this.findSmallestElementIndex();
            let smallestElement = this.array.splice(smallestIndex, 1)[0];
            this.sortedArray.push(smallestElement);
        }
        return this.sortedArray;
    }

    getCounts() {
        return {
            operationCount: this.operationCount,
            comparisonCount: this.comparisonCount
        };
    }
}

const sortedArray = new SelectionSorter();

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function recursiveCalculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

function recursiveFibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function countPermutations(arr) {
    if (arr.length === 0) {
        return 1;
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        count += countPermutations(remaining);
    }

    return count;
}

let arr = [1, 2, 3, 4, 5, true];

console.log(countPermutations(arr))