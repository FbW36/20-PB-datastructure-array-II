const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const city = euroCities[1];
euroCities[0] = "Berlin"; //2nd
console.log(euroCities);
console.log(euroCities.length); //3rd
euroCities.pop(); //4th
console.log(euroCities);
euroCities.push("Budapest"); //5th
console.log(euroCities);
euroCities.splice(1, 2); //6th
console.log(euroCities);

const asianCities = ["Dhaka", "Tokyo", "Beijing", "Kuala Lumpur"];
const cloneAssianCities = asianCities.slice()
console.log(asianCities ," copy ==>", cloneAssianCities)
