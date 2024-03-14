function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let min_index = i;
        // finding the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // swapping
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
}

const arr = [10, 7, 8, 9, 1, 5];
selectionSort(arr);
console.log("Sorted array:");
console.log(arr.join(" "));