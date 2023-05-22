/*
Construct an algorithm that locates the minimum value in
an array and moves it to the first position

Given an array of comparable values, move the lowest element
to array’s front, shifting backward any elements previously
ahead of it. Do not otherwise change the array’s order.

Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
As always, do this without using built-in functions.

For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].
*/


function minToFront(arr){
    var minValue = arr[0];
    var minValueIndex = 0;
    for (var i = 0; i < arr.length; i++){ // loop through all elements
        if (arr[i] < minValue){ // if current element is less than previous minimum
            minValue = arr[i]; // set current value to minimum
            minValueIndex = i; // record index of new minimum
        }
    }
    for (var j = minValueIndex; j >= 0; j--){ // start at the index of the minimum value and loop to index 0
        arr[j] = arr[j-1]; //replace the current value with the value from one position to the left
    }
    arr[0] = minValue; // finally, set the value for index 0 to the minimum value 
    return arr;
}

console.log(minToFront([5, 93, 22, 4]));
console.log(minToFront([4,2,1,3,5]));