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
