'use strict'

// ES2015 (previously known as ES6) feature examples

if (true) {
    var brand = 'Ford';
}

// variable brand gets hoisted and is accessible
// outside of the if block scope
console.log(brand);

if (true) {
    let model = 'Fiesta';
}

// variables declared with 'let' and 'const' do not
// get hoisted, variable model is not accessible here,
// the following commented line results in: ReferenceError (model is not defined)
// console.log(model);

const PI = 3.142;

// const can't be assigned to multiple times, the following lines
// results in: TypeError: Assignment to constant variable
//PI = 3.14159265359

// TODO:
// functions (default params, rest params, spread operators, arrow functions)
// Objects, strings and Object.assign
// Arrays, Maps and Sets
// Classes and modules
// Promises, iterators and generators