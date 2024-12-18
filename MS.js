function mergeSort(array) {
    //Base case: If the array has 1 or no elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    //Find the middle index to split the array
    let mid = Math.floor(array.length / 2);

    //Split the array into left and right halves
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);

    //Recursively sort both halves
    let sortedLeft = mergeSort(leftArray);
    let sortedRight = mergeSort(rightArray);

    //Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
    let result = [];
    let i = 0;
    let j = 0;

    //Merge the two arrays while comparing elements
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            result.push(leftArray[i]);
            i++;
        } else {
            result.push(rightArray[j]);
            j++;
        }
    }

    //Add any remaining elements from leftArray
    while (i < leftArray.length) {
        result.push(leftArray[i]);
        i++;
    }

    //Add any remaining elements from rightArray
    while (j < rightArray.length) {
        result.push(rightArray[j]);
        j++;
    }

    return result;
}

let array = [1, 4, 3, 5, 8, 9, 6];
let sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);