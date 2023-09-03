const late = callback => {
    setTimeout(() => {
        callback("Hello every One");
    },1000)
}

setTimeout(() =>{
    console.log("Namskar");
    late((message) => {
        console.log(message);
    })
},2000)

console.log("Hi");

console.log("Hello");

const sum = (a,b) => { a + b }
console.log(sum(5,6)) // it print value of 5 + 6 = 11