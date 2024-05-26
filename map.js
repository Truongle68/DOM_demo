//create a map
const map = new Map();
//add value to a map
map.set('country', 'Vietnam');
map.set('capital','Hanoi');
map.delete('capital');
//
document.getElementById("country").innerHTML= map.get('country');
document.getElementById("capital").addEventListener('copy',alert('deo duoc copy'))
//sz of map
console.log(map.size);
//return boolean value
console.log(map.has('country'));
//clear all elements
map.clear();
console.log(map.size);
//
const ageMap = new Map([
  ['John',20],
  ['June',23],
  ['July',19],
  ['Mask',21]
]);
//get keys
console.log(ageMap.keys());
//get values
console.log(ageMap.values());
//
console.log(ageMap.keys(),ageMap.values(),ageMap.entries());
//forEach
ageMap.forEach((v,k) => {
  console.log(`${k} is ${v} years old`);
});
//convert an Obj into a Map
const address ={
  'Tapas': 'Bangalore',
  'James': 'Huston',
  'Selva': 'Srilanka'
};

const addressMap = new Map(Object.entries(address)); 
console.log(addressMap.entries());

addressMap.forEach((value,key) => {
  console.log(`${key} comes from ${value}`)
});

//convert a map into an Obj
Object.fromEntries(ageMap);

