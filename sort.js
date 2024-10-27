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

