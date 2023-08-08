# Code Structure

The first thing we’ll study is the building blocks of code.

## [Statements](readme.md#statements)

Statements are syntax constructs and commands that perform actions.

We’ve already seen a statement, `alert('Hello, world!')`, which shows the message “Hello, world!”.

We can have as many statements in our code as we want. Statements can be separated with a semicolon.

For example, here we split “Hello World” into two alerts:

    alert('Hello'); alert('World');

Usually, statements are written on separate lines to make the code more readable:

    alert('Hello');
    alert('World');

## [Semicolon](readme.md#semicolon)

A semicolon may be omitted in most cases when a line break exists.

This would also work:

    alert('Hello')
    alert('World')

Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!

There are cases when a newline does not mean a semicolon. For example:

    alert(3 +
    1
    + 2);

The code outputs <kbd>6</kbd> because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus <kbd>"+"</kbd>, then it is an “incomplete expression”, so a semicolon there would be incorrect. And in this case, that works as intended.

## [Comment](./readme.md#comment)

As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

One-line comments start with two forward slash characters <kbd>//</kbd>.

The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

Like here:

    // This comment occupies a line of its own
    alert('Hello');

    alert('World'); // This comment follows the statement

Multiline comments start with a forward slash and an asterisk <kbd>`/*`</kbd> and end with an asterisk and a forward slash <kbd>`/*`</kbd>.

Like this:

    /* An example with two messages.
    This is a multiline comment.
    */
    alert('Hello');
    alert('World');

The content of comments is ignored, so if we put code inside `/* … */`, it won’t execute.

Sometimes it can be handy to temporarily disable a part of code:

    /* Commenting out the code
    alert('Hello');
    */
    alert('World');