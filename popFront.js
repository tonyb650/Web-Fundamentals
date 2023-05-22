/*
Construct an algorithm that removes and returns the value at the front of 
an array

Given an array, remove and return the value at the beginning of the array. 
Do this without using any built-in array methods except pop().

For example, popFront([5, 93, 22, 4]) should return 5 and the original 
array should result as [93, 22, 4].
*/

function popFront(arr){
    var firstElement = arr[0];
    for (var i = 0; i <= arr.length-2; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return firstElement;
}

var arrayToEdit = [5, 93, 22, 4];
console.log("Value removed from array: " + popFront(arrayToEdit));
console.log("Edited array = "+arrayToEdit);