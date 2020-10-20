//1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondItem = euroCities[1];
console.log(secondItem);

// 2 Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

// Or Replace
// let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
// console.log(euroCities.replace("Paris", "berlin"));

// 3 length
console.log(euroCities.length);

// 4 Pop
euroCities.pop(euroCities.length - 1);
console.log(euroCities);

// 5 push
euroCities.push("Budapest");
console.log(euroCities);

// 6 Slice
let slc = euroCities.slice(1, 3);
console.log(slc);

// 7 clone asianCities
const asianCities = ["Dhaka", "Delhi", "Tokyo", "Bangkok"];
allasianCities = asianCities;
console.log(allasianCities);
