//? 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

let city1 = euroCities[1];

console.log("2nd euroCity ==>", city1);

//? 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";

console.log("Eurocities ==>", euroCities);

//? 3. Print the length of the array "euroCities".

console.log("euroCities length ==>", euroCities.length);

//? 4. Delete the last item of the array "euroCities".

euroCities.pop();

console.log("Eurocities ==>", euroCities);

//? 5. Add "Budapest" to the euroCities array.
euroCities.push("Budapest");

console.log("Eurocities ==>", euroCities);

//? 6. Delete the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log("Eurocities ==>", euroCities);
//? 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

const asianCities = ["Bangkok", "Tokio", "Pekin"];

asianCitiesCopy = [...asianCities];

asianCitiesCopy.push("Bangladesh");

console.log("asianCities ==>", asianCities);

console.log("asianCitiesCopy ==>", asianCitiesCopy);
