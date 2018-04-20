
/**
 * Randomly fetching a specified number of elements from an array
 * @param arr
 * @param count
 * @returns {Array}
 */
let randomArrayItems = function (arr, count = 1) {
    //
    let temArray = [];
    for (let index in arr) {
        temArray.push(arr[index]);
    }

    // Prevent cross-border
    count = Math.min(arr.length, count);

    // Get the arr index, save to this array
    let result = [];
    for (let i = 0; i < count; i++) {
        // generate a random index
        let arrIndex = Math.floor(Math.random() * temArray.length);
        // get the item of arrIndex
        result[i] = temArray[arrIndex];
        // delete the arrIndex from temArray
        temArray.splice(arrIndex, 1);
    }
    return result;
};

// Example
let array = [1,2,3,4,5,6];
randomArrayItems(arr);   // default get 1 item
randomArrayItems(arr, 3);  // get 3 items
randomArrayItems(arr, 10); // wrong count of 10, get all the 6 items
