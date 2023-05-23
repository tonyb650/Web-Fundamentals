/* 
Joe drives a taco truck in the booming town of Squaresburg. He uses an array 
of [x,y] coordinates corresponding to the locations of his customers. He also 
uses an array of [x,y] as coordinates corresponding to the location where he 
parks his truck. Customers walk from their location to his truck, but Joe wants 
to minimize the total distance from his truck to his customers, so he's looking 
for a better place to park. Feature request: given a customer coordinate array, 
return an optimal taco truck location.

Construct an algorithm that takes an array of coordinates and 
returns an optimal taco truck location.

Test an algorithm written to solve a problem by running several test cases.
Here's what we know: City blocks are perfect squares, and every street is two-way, 
at perfect right angles. He only parks by street corners (coordinates like [37,-16]). 
Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe 
checks the array before deciding where to park. Given a customer coordinate array, 
return an optimal taco truck location.

Ninja Bonus
Add your file to your "Pre-Bootcamp Public" Repository on your GitHub account. For now, 
experiment with doing this on your own (perhaps directly on GitHub) - you will learn 
more about adding files to GitHub during bootcamp!
*/


// STRATEGY:
// Determine the total size of the grid (max & min values for x & y)
// Within this grid, look at for each coordinate, and then for each of these
// coordinates, look at each customer and determine how far it would be for
// them to get there. Add up those distances and story in a 2-dimensional
// array. 
// Then, compare all values in the 2-dim array and the coordinates
// with the smallest total value will be winner

function tacoTuesdays(arr){
    // To start, find maximum and minimum x,y coordinates (how big is the city?)
    var minX = arr[0][0];
    var minY = arr[0][1];
    var maxX = minX;
    var maxY = minY;
    for (var i = 0; i < arr.length; i++){
        if (arr[i][0] < minX){
            minX = arr[i][0];
        }
        if (arr[i][0] > maxX){
            maxX = arr[i][1];
        }
        if (arr[i][1] < minY){
            minY = arr[i][0];
        }
        if (arr[i][1] > maxY){
            maxY = arr[i][1];
        }
    }
    // minX = Westmost coordinate
    // maxX = Eastmost coordinate
    // minY = Northmost coordinate
    // maxY = Southmost coordinate


    // Declare needed variables
    var xDistance = 0; // Distance for a customer from a given x coordinate
    var yDistance = 0; // Distance for a customer from a given y coordinate
    var totalDistance = 0; // Sum of xDistance + yDistance
    var locationX = 0; // index in array (offset for "origin")
    var locationY = 0; // index in array (offset for "origin")
    var cumulativeDistance = []; // 2 dimensional array to store total combined distances for all customers at a given x,y coordinate
    
    for (var x = minX; x <= maxX; x++){ // loop through each x,y coordinate
        locationX = x-minX;
        cumulativeDistance[locationX]=[]; // initialize element in array
        for (var y = minY; y <= maxY; y++){
            locationY = y-minY;
            cumulativeDistance[locationX][locationY] = 0;
            for (i = 0; i <arr.length; i++){ // loop through each customer
                xDistance = Math.abs(x - arr[i][0]); //arr [i][0] is the X-coordinate for customer i
                yDistance = Math.abs(y - arr[i][1]);  // arr [i][1] is the Y-coordinate for customer i
                totalDistance = xDistance + yDistance;
                cumulativeDistance[locationX][locationY] += totalDistance; // increase the value in our 2-dimensional array by the total distance for this customer
            }
            
        }
    }

    // Now, we will determine which value in the 2-dimensional array is the lowest
    // by looping through every value and tracking the lowest value as well as the x,y
    // coordinates of the lowest value
    var minTotalDistance = cumulativeDistance[0][0];
    var lowestX = 0;
    var lowestY = 0; 
    for(i = 0; i < cumulativeDistance.length; i++){
        for (j = 0; j < cumulativeDistance[i].length; j++){
            if (cumulativeDistance[i][j] < minTotalDistance){
                minTotalDistance = cumulativeDistance[i][j];
                lowestX = i + minX;
                lowestY = j + minY;
            }
        }
    }
    console.log("Park at the coordinates [" + lowestX + "," + lowestY +"]");
    console.log("The average distance for all customers is: " + minTotalDistance/arr.length);
}

var custLocations = [[-16,-1], [1,1], [0,2], [3,6], [5,5]]; // set up the customer locations
tacoTuesdays(custLocations); // call the functions