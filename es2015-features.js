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

// function with default parameter
var sayHelloToPeople = function (people = []) {
    if (people.length === 0) {
        console.log('No one to say hello to');
    }

    for (let person of people) {
        console.log(`Hello ${person}`);
    }
}

sayHelloToPeople(['Alice', 'Bob']);
sayHelloToPeople();

// named parameters for options object pattern
var sayHello = function (person, { numberOfTimes, asInfo } = {}) {
    for (let i = 0; i < numberOfTimes; i++) {
        if (asInfo) {
            console.info(`Hello ${person}`);
        }
        else {
            console.log(`Hello ${person}`);
        }
    }
}

sayHello('Ravi', { numberOfTimes: 2, asInfo: true });

// TODO:
// functions (rest params, spread operators, arrow functions)
// Objects, strings and Object.assign
// Arrays, Maps and Sets
// Classes and modules
// Promises, iterators and generators