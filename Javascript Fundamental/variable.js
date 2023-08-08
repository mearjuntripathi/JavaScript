// A variable in JavaScript is a named location in memory that can be used to store data.
// Variables can be used to store any type of data, such as numbers, strings, objects, and functions.

// To declare a variable in JavaScript, you use the var keyword.
// For example, 
// the following code declares a variable named name and stores the value "Arjun Tripathi" in it:

var name1 = "Arjun Tripathi";

// Once you have declared a variable, you can use it to store data and access it later. 
// For example, the following code uses the name variable to print the value "John Doe" to the console:

console.log(name1);

// Variables in JavaScript can be either local or global. 
// Local variables are only accessible within the function in which they are declared. 
// Global variables are accessible from anywhere in the JavaScript code.

// Here are some rules for declaring variables in JavaScript:   
//  1. Variable names must start with a letter, an underscore (_), or a dollar sign ($).
//  2. Variable names cannot contain spaces.
//  3. Variable names cannot be the same as reserved keywords, such as var or function.

// We can also create a variable with the help of let keyword.
// for example,
// the following code decleare a variable name2 and store the value "Trisha" in it:

let name2 = "Trisha"

// we print it using console.log()

console.log(name2);


// Differance between let and var keyword.

// The keywords var and let are both used to declare variables in JavaScript, 
// but there are some important differences between them.

// Scope

// The main difference between var and let is the scope of the variables they create. 
// Variables declared with var have function scope, 
// which means they are accessible throughout the function in which they are declared. 
// Variables declared with let have block scope, 
// which means they are only accessible within the block where they are declared.

// For example, the following code declares a variable named x with var and let in two different functions. 
// The var declaration of x is accessible in both functions, 
// but the let declaration of x is only accessible in the function where it is declared.

function foo() {
  { 
    var x = 10;
  }
  console.log(x); // 10
}

function bar() {
  let x = 20;
  console.log(x); // ReferenceError: x is not defined if declear let as var which is showing at upper code
}

foo();
bar();

// Hoisting

// Another difference between var and let is hoisting. 
// Hoisting is the process of moving variable declarations to the top of their scope before they are actually executed. 
// Variables declared with var are hoisted, but variables declared with let are not.

// This means that the following code will print the value 10, 
// even though the var declaration of x is not actually executed until after the console.log() statement.

var x1;
console.log(x1); // 10
x1 = 10;

// Reassignment

// Variables declared with var can be reassigned, 
// while variables declared with let can only be reassigned if they are not declared with the const keyword.

// For example, the following code will not throw an error, because the var declaration of x can be reassigned.

var x2 = 10;
x2 = 20;
console.log(x2); // 20

// However, the following code will throw an error, because the let declaration of x cannot be reassigned.

let x3 = 10;
x3 = 20; // TypeError: Assignment to constant variable.
console.log(x3); // 10

// Which one should you use?

// In general, you should use let instead of var. 
// let is a newer keyword that offers more control over the scope and reassignment of variables. 
// However, there are some cases where you may need to use var, 
// such as when you are using a legacy code that relies on var.


// The const keyword in JavaScript is used to declare a constant variable. 
// A constant variable is a variable that cannot be changed after it is initialized. 
// This makes it a good way to ensure that the value of a variable does not change unexpectedly.

// To declare a constant variable, you use the const keyword followed by the variable name and the value of the variable. 
// For example, the following code declares a constant variable named PI and assigns it the value of pi.

const pi = 3.14159;
console.log(pi)

// Once a constant variable has been declared, you cannot change its value. 
// If you try to change the value of a constant variable, you will get an error.

// Here is an example of an error that you would get if you tried to change the value of a constant variable:

/*            PI = 3.1416; // Error: Assignment to constant variable.*/


// Constant variables are a good way to ensure that the value of a variable does not change unexpectedly. 
// This can be helpful for preventing bugs in your code.

// Here are some of the benefits of using const in JavaScript:

// It prevents bugs. By preventing the value of a variable from being changed, 
//      const can help to prevent bugs in your code. 
//      This is because it makes it less likely that you will accidentally change the value of a variable and break your code.
// It improves readability. 
//      const can also improve the readability of your code by making it 
//      clear that the value of a variable should not be changed. 
//      This can make your code easier to understand and maintain.
// It is a good practice. 
//      const is considered to be a good practice in JavaScript, 
//      and many developers use it in their code. This means that if you use const, 
//      your code will be more consistent with other JavaScript code.

// Here are some of the limitations of using const in JavaScript:

// It can make your code less flexible. Because const variables cannot be changed, t
//      hey can make your code less flexible. 
//      This is because you cannot change the value of a const variable to adapt to new situations.
// It can be difficult to use with objects. 
//      const can be difficult to use with objects, because objects are mutable. 
//      This means that you cannot prevent the properties of an object from being changed.

// Overall, const is a useful keyword in JavaScript that can help to prevent bugs and 
// improve the readability of your code. However, it is important to be aware of the limitations of const before you use it in your code.