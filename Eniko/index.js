// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
var euroCities = ["Budapest", "Coppenhagen", "Prague", "Dublin", "Malmö"];
// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);
// Print the length of the array "euroCities".
console.log("length of euroCites:", euroCities.length);
// Delete the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);
// Add "Budapest" to the euroCities array.
euroCities.push('Budapest');
console.log(euroCities);
// Delete the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);
// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = ["Tokyo", "Chiangmai", "Hong Kong"];
let moreCities = asianCities.slice();
console.log(moreCities);