// 1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
secondCity = euroCities[1];
console.log(euroCities);

// 2
euroCities[0] = "Berlin";
console.log(euroCities);

// 3
console.log(euroCities.length);
console.log(euroCities);

// 4
euroCities.pop();
console.log(euroCities);

// 5
euroCities.push("Budapest");
console.log(euroCities);

// 6
console.log("will remove", euroCities[1], "and", euroCities[2]);
euroCities.splice(1, 2);
console.log(euroCities);

// 7
const asianCities = ["Hiroshima", "Nagano", "Manilla", "Beijing"];
clonedAsianCities = [...asianCities];
console.log(clonedAsianCities);
