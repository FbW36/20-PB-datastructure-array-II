
// 1-
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities); 

let secondItem = euroCities[1];
console.log(secondItem);

// 2-
euroCities[0] = "Berlin";
console.log(euroCities);

// 3-
console.log(`The length of euroCities is ${euroCities.length}`);

// 4-
let popedItem = euroCities.pop();
console.log(`The last element '${popedItem}' is deleted from the array`);
console.log("The updated array is ", euroCities);

// 5- 
euroCities.push("Busapest");
console.log(euroCities);

// 6-
let index = euroCities.indexOf("London");
euroCities.splice(index, 1);
console.log(euroCities);

index = euroCities.indexOf("Valletta");
euroCities.splice(index, 1);
console.log(euroCities);

// 7- 
const asianCities = ["Sana\'a", "Cairo", "Baghdad", "Damascus", "Tokyo"];
const clonedAsianCities = [];
clonedAsianCities.push("Sana\'a", "Cairo", "Baghdad", "Damascus", "Tokyo");
console.log(`The AsianCites are ${asianCities} and the cloned array is ${clonedAsianCities}`);
