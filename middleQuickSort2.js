function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, start, end) {
    // Choose the middle element as the pivot
    let mid = Math.floor((start + end) / 2);
    let pivot = arr[mid];

    // Move pivot to the end temporarily
    swap(arr, mid, end);

    // Partition the array around the pivot
    let index = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, index);
            index++;
        }
    }

    // Move pivot to its correct place
    swap(arr, index, end);
    return index;
}

function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

// Example usage:
let array = [3, 34, 7, 1, -2, 3, 8, 4];
quickSort(array);
console.log("Sorted array:", array);

