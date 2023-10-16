
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
// console.log("------------- POP ------------")
// console.log(Fruit);
// console.log(Fruit.pop()); // it delete element from last
// console.log(Fruit);

// console.log("------------- PUSH ------------")
// Fruit.push('Graps'); // it add element at last

// console.log(Fruit);

// console.log("------------- SHIFT ------------")
// console.log(Fruit.shift()) // it remove a element from begining
// console.log(Fruit);

// console.log("------------- UNSHIFT ------------")
// Fruit.unshift('Apple');
// console.log(Fruit); // it add element at first position

// console.log("------------- SPLICE ------------")
// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
// let arr = ['I', 'Will', 'go', 'home'];
// console.log(arr);
// delete arr[3]; // it remove that element but length is still same

// arr.splice(3,1); // from index 3 delete 1 element
// console.log(arr);

// arr.splice(3, 1, "Offce"); // it replace index 3 1 element
// console.log(arr);

// arr.splice(3,0,"office","and"); // it insert value at position
// console.log(arr);

// console.log("------------- SLICE ------------")
// // The method arr.slice is much simpler than similar-looking arr.splice.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(2, 5)); // copy from 2 to 5
// console.log(arr.slice(-4)); // copyt from -4 till end
// // It returns a new array copying to it all items from index start to end (not including end). 
// // Both start and end can be negative, in that case position from array end is assumed.

// console.log("------------- CONCAT ------------");
// // The method arr.concat creates a new array that includes values from other arrays and additional items.
// let arr = [1,2];
// // console.log(arr.concat(3,4,5,6));
// let arr1 = {
//     0: "HI",
//     1: "Hello",
//     length:5
// }
// console.log(arr.concat(arr1));

// console.log("------------- Iterate (forEach) ------------");
// // The arr.forEach method allows to run a function for every element of the array.
// Fruit.forEach((item, index, array)=>{
//     console.log(`${item} at index = ${index} in array ${array}`)
// });

console.log("------------- Searching in Array ------------");
// Now let's cover method that search in array