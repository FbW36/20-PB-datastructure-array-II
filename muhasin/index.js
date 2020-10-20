const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

euroCities.push["Paris", "London", "Valletta", "Prague", "Rome"];
euroCities[0] = "Berlin"
console.log("Change the first item ==>", euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

console.log("length of the array ==>", euroCities.length); // 5


console.log("delete Rome ==>", euroCities.pop()); // Rome
console.log("delete the last city", euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]
euroCities.push("Budapest");
console.log("addBudapest ==>", euroCities);

const deleteSecondAndThird = euroCities.splice(1, 2);
console.log("deleteSecondAndThird ==>", euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]


const asianCities = [];
const cloneAsianCities = [...asianCities];
cloneAsianCities.push("Beijing", "Tokyo", "Delhi", "Seoul");

console.log("cloneAsianCities ==>", cloneAsianCities); // [ 'Beijing', 'Tokyo', 'Delhi', 'Seoul' ]