
function sayHi(name){
    
    console.log("Hi " + (name || "empty string"));
}

let names = ["Arjun", "Rahul", "Aniket"];



for(let i = 0 ; i <= names.length ; i++){
    console.log("Saying hi to " + names[i]);
    sayHi(names[i]);
}