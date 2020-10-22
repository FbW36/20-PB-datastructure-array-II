//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

let capital = euroCities[1];

console.log("first print vars:", euroCities, capital);

// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";

console.log("change paris to berlin:", euroCities);

//3. Print the length of the array "euroCities".

console.log("arry euroCities length", euroCities.length); // 5

// 4. Delete the last item of the array "euroCities".

console.log("delete ast item:", euroCities.pop(), euroCities);

// 5. Add "Budapest" to the euroCities array.

console.log("add Budapest:", euroCities.push("Budapest"), euroCities);

// 6.Delete the second and third items from the euroCities array.

// option 1
euroCities.splice(1, 2);
console.log("splice", euroCities);

// 2

euroCities.slice(1, 2);
console.log("slice:", euroCities);

// 7. Create another variable named asianCities and assign an array to the variable.Clone the array asianCities.

const asianCities = ["Jakarta", "Tokio", "Singapur"];
const asianCitiesClone = asianCities;

console.log(asianCitiesClone);

// What do you mean with clone?
