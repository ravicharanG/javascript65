let score = 10 + 11;

let num1 = 10;

// num1 = num1 + 5
num1 /= 5;

// console.log(num1);
// console.log(score/10);


let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i=0;i <cities.length;i++){
  if(cities[i]=="Paris") continue;
  visitedCities.push(cities[i]);
}
  
console.log(visitedCities);