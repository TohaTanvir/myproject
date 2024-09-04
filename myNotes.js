//Getting Started
console.log("hello, world!");
//logging variables
var foo = "bar";
console.log(foo);
//result: bar
var thisVar = "first value";
var thatVar = "second value";
console.log("thisVar:", thisVar, "and thatVar:", thatVar);
//result: first value and thatVar: second value

//Placeholders
var greet = "hello",
  who = "world";
console.log("%s, %s!", greet, who);
//result: hello, world!

//Logging Objects
console.log({
  Email: "",
  Group: {},
  Id: 33,
  IsHiddenInUI: false,
  IsSiteAdmin: false,
  LoginName: "i:0#.w|virtualdomin\\user2",
  PrincipalType: 1,
  Title: "user2",
});

//Logging HTML elements
console.log(document.body);

//Using window.alert()
window.alert(message);
alert(message);
alert("hello, world");

//Defining a Variable
var myVariable = "This is a variable!";

//Using a Variable
var number1 = 5;
number1 = 3;

console.log(number1); //3
window.alert(number1); //3

//add subtract multiply divide
number1 = number1 + 5;
number1 = number1 - 6;
var number2 = number1 * 10;
var number3 = number2 / number1;

//Types of Variables
var myInteger = 12;
// 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482;
// 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5;
// 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22;
// 64-bit floating-point number
var myBoolean = true;
var myBoolean2 = false;
// 1-bit true/false (0 or 1)

var myNotANumber = NaN;
var NaN_Example = 0 / 0;
// NaN: Division by Zero is not possible

var notDefined;
// undefined: we didn't define it to anything yet
window.alert(aRandomVariable); // undefined

var myNull = null; // null

//Arrays and Objects: An array is a set of variables. For example:
var myArray = []; // empty array
var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];

myArray = ["zero", "one", "two"];
window.alert(myArray[0]);
// 0 is the first element of an array
// in this case, the value would be "zero"
myArray = ["John Doe", "Billy"];
elementNumber = 1;
window.alert(myArray[elementNumber]); // Billy

//An object is a group of values; unlike arrays, we can do something better than them:
myObject = {};
john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
billy = {
  firstname: "Billy",
  lastname: undefined,
  fullname: "Billy",
};
window.alert(john.fullname); // John Doe
window.alert(billy.firstname); // Billy

//null: null is used for representing the intentional absence of an object value and is a primitive value. Unlike undefined, it is not a property of the global object. It is equal to undefined but not identical to it.
null == undefined; // true
null === undefined; // false

//CAREFUL: The typeof null is 'object'.
typeof null; // 'object';

//To properly check if a value is null, compare it with the strict equality operator
var a = null;
a === null; // true

//Testing for NaN using isNaN()
isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date()); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function () {}); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number

//Tabulating values - console.table()
var personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phoneNo: "1234567890",
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phoneNo: "1234567890",
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phoneNo: "1234567890",
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phoneNo: "1234567890",
  },
];
console.table(personArr, ["name", "personId"]);

//Array methods
//const arr = [1, 2, 3, 4, 5];

// Using push to add 6 to the end
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Using pop to remove the last element
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Using shift to remove the first element
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

// Using unshift to add 0 to the beginning
arr.unshift(0);
console.log(arr); // Output: [0, 2, 3, 4, 5]

// Using concat to create a new array
const newArr = arr.concat([6, 7]);
console.log(newArr); // Output: [0, 2, 3, 4, 5, 6, 7]
console.log(arr); // Original array is unchanged: [0, 2, 3, 4, 5]

// Using slice to create a new subarray
const slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]
console.log(arr); // Original array is unchanged: [0, 2, 3, 4, 5]

// Using reverse to reverse the order of elements
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 0]

// Using sort to sort the elements
arr.sort();
console.log(arr); // Output: [0, 2, 3, 4, 5]

console.log(arr.indexOf(4)); // 3
console.log(arr.includes(3)); // true
console.log(arr.find((x) => x > 3)); // 4
console.log(arr.filter((x) => x > 3)); // [4, 5]
console.log(arr.map((x) => x * 2)); // [2, 4, 6, 8, 10]
console.log(arr.reduce((sum, x) => sum + x, 0)); // 15
console.log(arr.join("-")); // "1-2-3-4-5"
console.log(arr.every((x) => x > 0)); // true
console.log(arr); // [1, 2, 3, 4, 5]

const arr = [0, 2, 3, 4, 5];

// Using some to check if at least one element is greater than 4
const someGreaterThan4 = arr.some((x) => x > 4); // true
console.log(someGreaterThan4); // Output: true

// Using findIndex to find the first element greater than 4
const indexGreaterThan4 = arr.findIndex((x) => x > 4); // 4
console.log(indexGreaterThan4); // Output: 4

// Using fill to fill the array with 9
arr.fill(9);
console.log(arr); // Output: [9, 9, 9, 9, 9]

// Using copyWithin to copy the array elements
arr.copyWithin(0, 1);
console.log(arr); // Output: [9, 9, 9, 9, 9]

// Using flatMap to map and flatten the array
const flatMappedArr = arr.flatMap((x) => [x, x * 2]);
console.log(flatMappedArr); // Output: [9, 18, 9, 18, 9, 18, 9, 18, 9, 18]

// Using entries to get an iterator of key/value pairs
const entries = arr.entries();
console.log([...entries]); // Output: [[0, 9], [1, 9], [2, 9], [3, 9], [4, 9]]

// Using keys to get an iterator of keys
const keys = arr.keys();
console.log([...keys]); // Output: [0, 1, 2, 3, 4]

// Using values to get an iterator of values
const values = arr.values();
console.log([...values]); // Output: [9, 9, 9, 9, 9]
