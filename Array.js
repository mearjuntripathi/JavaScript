
let Fruit = ['Apple', 'Banana', 'Mango', 'Guava', 'Pineapple', 'Graps'];
/*
for(let i = 0 ; i < Fruit.length ; i++)
    console.log(Fruit[i]);

let array = ['Arjun', 1, true, {name : 'arjun'}, function(){console.log('hello')}]

for(let i = 0 ; i < array.length-2 ; i++)
    console.log(array.at(i));

console.log(array.at(-2).name);
array.at(-1)();
*/

// Methods of push/pop, and shift/unshift
console.log("------------- POP ------------")
console.log(Fruit);
console.log(Fruit.pop()); // it delete element from last
console.log(Fruit);

console.log("------------- PUSH ------------")
Fruit.push('Graps'); // it add element at last

console.log(Fruit);

console.log("------------- SHIFT ------------")
console.log(Fruit.shift()) // it remove a element from begining
console.log(Fruit);

console.log("------------- UNSHIFT ------------")
Fruit.unshift('Apple');
console.log(Fruit); // it add element at first position