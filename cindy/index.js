//Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valleta", "Prague", "Rome"]
const euroCities2 = ["London"]


//Change the first item in the array to "Berlin".
euroCities[0] = 'Berlin'

//Print the length of the array "euroCities".
console.log("This is the length of my array => ", euroCities.length)

//Delete the last item of the array "euroCities".
euroCities.pop()
//We got rid of 'Rome'...so now, length = 4

//Add "Budapest" to the euroCities array.
euroCities.push("Budapest")
//Now we have Budapest at the end of the array 

//Delete the second and third items from the euroCities array.
euroCities.splice(2, 1);
euroCities.splice(1, 1);

//Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
const asianCities = ["Tokyo"]
const clonedArray = [...asianCities]
console.log(clonedArray)//we're printing clonedArray! :D 

//console.logguing :v 
console.log(euroCities)