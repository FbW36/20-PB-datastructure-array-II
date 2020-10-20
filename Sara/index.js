// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. 
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"] ; 
console.log('euroCities ==>', euroCities) ; // [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

// Declare another variable and assign the second item of the array as a value.
let city = euroCities[1] 
console.log('city ==>', city) ; // London

// 2. Change the first item in the array to "Berlin".
euroCities[0] = 'Berlin' ;
console.log('euroCities ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log('euroCities length of array ==>', euroCities.length) ; // 5

//4. Delete the last item of the array "euroCities".
console.log('euroCities ==>', euroCities.pop()) ; // Rome

console.log('euroCities ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Add "Budapest" to the euroCities array.
euroCities.push('Budapest') ; 
console.log('euroCities ==>', euroCities) ; // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6. Delete the second and third items from the euroCities array. 
euroCities.splice(1, 2) ; // number 1 is where splice starts deleting and number 2 is where it stops ==> if i only write one number it will delete everything that comes after that 
console.log('euroCities ==>', euroCities) ; // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array to the variable. 
const asianCities = ['Tokyo' , 'Seoul', 'Mumbai', 'Taipei'] ; 
console.log('asianCities ==>', asianCities) ; // [ 'Tokyo', 'Seoul', 'Mumbai', 'Taipei' ]

// Clone the array asianCities. 
let clonedCities = [...asianCities] ; 
console.log('clonedCities ==>', clonedCities) ; 

