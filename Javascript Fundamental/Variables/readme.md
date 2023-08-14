# Variable
Most of the time, a JavaScript application needs to work with information. Here are two examples:

1. An online shop – the information might include goods being sold and a shopping cart.
2. A chat application – the information might include users, messages, and much more.

Variable is used to store these information.

## [A Variable](#a-variable)
A [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) is "named storage" for data. We can use variable to store goodies, visitor, and other data.

To create a variable in JavaScript, use the `let` keyword.

The statement below creates (in other words: declares) a variable with the name “message”:

    let message;

Now, we can put some data into it by using the assignment operator `=` :

    let message;
    message = 'Hello, World!'; // store the string 'Hello, World!' in the variable named message

The string is saved in memory into the memory rea associated with the variable. We can access it using variable name :

    let message;
    message = 'Hello, World!';

    alert(message); // Show the variable content

To be concise, we can combine the variable declaration and assignment into a single line:

    let message = 'Hello, World!'; // define the variable and assign the value

    alert(message); // Hello, World!

We can also declare multiple variables in one line:

    let user = 'John', age = 25, message = 'Hello';

That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:

    let user = 'John';
    let age = 25;
    let message = 'Hello';

Some people also define multiple variables in this multiline style:

    let user = 'John',
    age = 25,
    message = 'Hello';

…Or even in the “comma-first” style:

    let user = 'John'
    , age = 25
    , message = 'Hello';

Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.
 
****
### [`var` instead of `let`](#var-instead-of-let)

In older scripts, you may also find another keyword: `var` instead of `let`:

    var message = 'Hello';

The `var` keyword is *almost* the same as `let`. It also declares a variable, but in a slightly different, “old-school” way.

The keywords var and let are both used to declare variables in JavaScript. However, there are some key differences between the two keywords.

- **Scope**: Variables declared with var have function scope, which means that they are accessible from anywhere within the function in which they are declared. Variables declared with let have block scope, which means that they are only accessible from within the block in which they are declared.

- **Hoisting**: Variables declared with var are hoisted to the top of their scope, which means that they can be accessed before they are declared. Variables declared with let are not hoisted, so they cannot be accessed before they are declared.

- **Redeclaration**: Variables declared with var can be redeclared within the same scope. Variables declared with let cannot be redeclared within the same block.

In general, it is recommended to use let instead of var for new code. let has a number of advantages over var, including block scope, no hoisting, and no redeclaration. However, there are some cases where var may still be necessary, such as when backward compatibility is required.

Here are some examples of how to use var and let:

    // This code uses var to declare a variable with function scope.
    var myVar = 10;

    // This code uses let to declare a variable with block scope.
    {
      let myVar = 20;
      console.log(myVar); // 20
    }

    // This code tries to redeclare the variable myVar with var.
    var myVar = 30; // This will not compile.

    // This code tries to redeclare the variable myVar with let.
    {
      let myVar = 40;
      console.log(myVar); // 40
    }

****

## [A real-life anology](#a-real-life-anology)
We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

For instance, the variable message can be imagined as a box labeled `"message" `with the value `"Hello!"` in it:

![Variable representation](https://javascript.info/article/variables/variable.svg)