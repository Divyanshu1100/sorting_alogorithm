function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swapping elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            
            break;
        }
    }
}

const arr = [10, 7, 8, 9, 1, 5];
bubbleSort(arr);
console.log("Sorted array:");
console.log(arr.join(" "));