var PI = 3.14;
PI = 42; // stop me from doing this!

//solution

const PI = 3.14;

// What is the difference between var and let?
//Scope - var has a global scope, let is limited to the block where its defined
//Declaration - var can be redeclared (var animal = cat; var animal = true); let cannot.
//Its value can be changed (animal = dog), but cannot be re-declared (let animal= dog)

// What is the difference between var and const?
//Scope - var has a global scope, const is limited to the block where its defined
//Declaration - var can be redeclared (var animal = cat; var animal = true); const cannot.
//Var value can be updated, const cannot.

// What is the difference between let and const?
//Let value can be updated, const cannot be updated.

// What is hoisting?
//In JavaScript, a variable can be declared after it has been used.
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//It also allows you to use a function before you declare it in your code
