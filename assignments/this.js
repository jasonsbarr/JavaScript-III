/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 0. My own addition: unlike other languages (like Java) that use the "this" keyword, where the value of "this" depends on how the object is defined, in JavaScript the invocation context plays a role in determining the value of "this."
* 1. The window/global object - for functions invoked in global scope
* 2. Implicit binding - when you execute a function as a method on an object, most commonly seen using dot notation, the value of "this" is the object on which the method is invoked.
* 3. Explicit binding - Explicitly set the value of "this" in a function by using .call(), .apply(), or .bind(). Each takes an object to use as "this" followed by zero or more additional arguments.
* 4. New binding - when you create an object with the "new" keyword, invoking a constructor function, "this" is set to the object created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const obj1 = {
    name: "Object1",
    logThis() {
        console.log(this);
    }
}

obj1.logThis();

// Principle 3

// code example for New Binding
function Logger(message) {
    this.message = message;
}

Logger.prototype.thisMessage = function() {
    console.log(this.message, this);
}

const logger = new Logger(`This is a log message`);
logger.thisMessage();

// Principle 4

// code example for Explicit Binding
const obj2 = {
    name: "Object2",
    logName() {
        console.log(this.name);
    }
}

obj2.logName(); // "Object2"
obj2.logName.call(obj1); // "Object1"
