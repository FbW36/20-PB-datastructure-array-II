// 1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log("euroCities1 ==>", euroCities);
const city = euroCities[1];
console.log("city ==>", city);

// 2
euroCities[0] = "Berlin";
console.log("euroCities2 ==>", euroCities);

// 3
console.log("euroCities length ==>", euroCities.length);

// 4
euroCities.pop();
console.log("euroCities4 ==>", euroCities);

// 5
euroCities.push("Budapest");
console.log("euroCities5 ==>", euroCities);

// 6
const remove = euroCities.splice(1, 2);
console.log("euroCities6 ==>", euroCities);

// 7
const asianCities = ["Tokyo", "Beijin", "Seoul", "Jakarta"];
console.log("asianCities ==>", asianCities);
const asianCities2 = asianCities.slice();
console.log("asianCities2 ==>", asianCities2);
