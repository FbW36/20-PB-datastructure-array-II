const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

euroCities[0] = "Berlin";
console.log(euroCities.length);
euroCities.pop();
console.log(euroCities);
euroCities.push("Budapest");
console.log(euroCities);
euroCities[1] = euroCities.pop();
console.log(euroCities);
euroCities[2] = euroCities.pop();
console.log(euroCities);

const asianCities = ["Hongkong", "Singapore", "Beijing", "Wuhan", "Pnom Phen"];
const asianCitiesClone = asianCities.slice();
console.log(asianCitiesClone);