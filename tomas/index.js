let log = console.log;

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

// Declare another variable and assign the second item of the array as a value
let anotherVar = euroCities[1];
log('Another var:', anotherVar)

// Change the first item in the array to "Berlin"
euroCities[0] = 'Berlin';

// Print the length of the array "euroCities"
log('array length -->', euroCities.length);

// Delete the last item of the array "euroCities"
euroCities.pop()

// Add "Budapest" to the euroCities array
euroCities.push('Budapest')

//Delete the second and third items from the euroCities array.
euroCities[1] = "";
euroCities[2] = "";
log('Delete the second and third items -->', euroCities);

// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
const asianCities = ['Chongqing','Lhasa']
const clonedCities = asianCities.slice(0, 2);
log('asian cities cloned:', clonedCities)
