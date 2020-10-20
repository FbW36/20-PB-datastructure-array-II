//1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem= euroCities[1];

//2
euroCities[0]="Berlin"
console.log("2==>",euroCities);

//3
console.log("3==>",euroCities.length-1);

//4
euroCities.pop();
console.log("4==>",euroCities);

//5
euroCities.push("Budapest");
console.log("5==>",euroCities);

//6
euroCities.splice(1,2);
console.log("6==>",euroCities);

//7
const asianCities = ["Shangai", "Beijing", "Delhi", "Jakarta"];
const asianCitiesClone = asianCities;
console.log("7==>",asianCities);
console.log("7 clone ==>",asianCitiesClone);