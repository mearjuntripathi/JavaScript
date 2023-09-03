
// Function decleration
function sayHi(name){
    
    console.log("Hi " + (name || "empty string"));
}

let names = ["Arjun", "Rahul", "Aniket"];

// Function Expression
let sayHello = function(name){
    console.log("Hello " + name);
};

function sayHey(){
    console.log( "Hey");
}

for(let i = 0 ; i < names.length ; i++){
    console.log("Saying hi to " + names[i]);
    sayHi(names[i]); // Function call
    sayHello(names[i]); // Function call
    let func = sayHey;
    func();
    sayHey();
}
