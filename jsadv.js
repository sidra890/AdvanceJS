// Install node js first.After that write in terminal node and the file name like {node jsadv.js} to check the output
// node js is A runtime environment for javascript

console.log("hello advance javascript");
// console.log(global);

// simple function (by value) 

function addition(n1, n2) {
    return n1 + n2;
}
console.log("This is addition of two digits (simple plus):" + addition(5, 5));

//  using template literal
console.log(`This is literal template: Addition ${addition(2, 2)}`);

// simple functions for multiplication subtraction and division
function mult(n1, n2) {
    return n1 * n2;
}
console.log(`This is literal template:  Multiplication ${mult(2, 2)}`);

function subt(n1, n2) {
    return n1 - n2;
}
console.log(`This is literal template:  Subtraction ${subt(5, 2)}`);

function divide(n1, n2) {
    return n1 / n2;
}
console.log(`This is literal template:  Division ${divide(8, 2)}`);


// using arrow funtion

const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;


console.log(`
            Addition of two digits : ${sum(4, 8)} 
            Subtraction of two digits : ${sub(12, 8)}
            Multiplication of two digits : ${mul(4, 8)}
            Division of two digits : ${div(4, 8)} `);

// variables let const and var 

// var has scope inside or out side of the block (block means the code inside curly brackets or function) its value can be re writable
// let donot have scope outside of the block but its value can be re write
// const also donot have scope outside the block  and its value can't be re writeable
// same value can be define for different variables

// example practice below :

// var varData = "its var variable outside";


let letData = "its let  variable outside";
// console.log(letData);

const constData = "its const variable outside";
// constData = "const change value " (dont work)
// console.log(constData);


// make an if condition
if (1 == 1) {
    var varData = "its var variable inside";
    // varData = "rewrite value of var "
    // let letData = "its let variable inside block";
    // letData = "rewrite value of let"
    // const constData = "its const variable inside block";
    console.log(constData);
    // console.log(varData);
    console.log(letData);
}
console.log(varData);

// let and const dont work outside 
// console.log(letData); 
// {dont work}
// console.log(constData);
//  {dont work}

// Another arrow function PRACTICE

//  const nameIs = (sidra)  => sidra;
//  const contactIs = (farooq)  => farooq;
//  const emailIs = (hello)  => hello;
//  const addressIs = (bye)  => bye;

//  console.log(`
//  Name is : ${nameIs} 
//  Contact is : ${contactIs}
//  Email is : ${emailIs}
// Address is : ${addressIs} `);

// in the above code arrow also apperaing in console

// another try 

// const nameIs = (sidra) => sidra;
// const contactIs = (farooq) => farooq;
// const emailIs = (hello) => hello;
// const addressIs = ( mainstreet) =>  mainstreet;

// upper PART BECOMES USELESS

// const name = nameIs("Sidra");
// const contact = contactIs("24568");
// const email = emailIs("hi@sidra.com");
// const address = addressIs(" Main Street");

//  FINAL 

const name = "Sidra";
const contact = "24568";
const email = "hi@sidra.com";
const address = "Main Street";

console.log(`
Name is: ${name}
Contact is: ${contact}
Email is: ${email}
Address is: ${address}
`);




// now make a functions that takes 3 numbers and tell which one is greater of all

function greaterOne(n1, n2, n3) {
    if (
        n1 >= n2 && n1 >= n3
    ) { return n1; }
    else if (
        n2 >= n1 && n2 >= n3
    ) { return n2; }
    else {
        return n3;
    }
}

console.log(`The greater of all three digits is: ${greaterOne(160, 600, 100)}`);


// the end for today

// next day
// == means equals
// === means to check equality and data type at the same time
// % means divisible in js and it represent the remainder(modulus) 

//  to check whether number is even or odd
let numberIs = 10
if (numberIs % 2 === 0) {
    console.log("Its Even");
}
else {
    console.log("Its odd");
}

// && || ! operators (And Or Not)

//  to check whether number is divisible by these two odd numbers like 3 and 5

// we use And&& operator means if one condition is not true the output will be false as well
let numIs = 25
if (numIs % 3 == 0 && numIs % 5 == 0) {
    console.log("Is divisible");
}
else {
    console.log("Is not divisible by both numbers");
}

// use OR || operator now if one condition is true output will be true
let numbIs = 18
if (numbIs % 3 == 0 || numbIs % 5 == 0) {
    console.log("Is divisible");
}
else {
    console.log("Is not divisible by both numbers");
}

//use Not ! operator now if the condition is true output will false or the condition is false out will be true
let numbrIs = 15
if (!(numbrIs % 3 == 0 && numbrIs % 5 == 0)) {
    console.log("Is divisible");
}
else {
    console.log("Is not divisible by both numbers");
}

// lets check the weather condition

let temperature = 20
if (temperature >= 35) {
    console.log("Hot weather");
}
else if (temperature < 35 && temperature > 26) {
    console.log("Moderate Weather");
}
else {
    console.log("Cold Weather");
}

//   let's check the grades
let percentage = 55

if (percentage >= 80) {
    console.log("A-one Grade");
}
else if (percentage < 80 && percentage >= 70) {
    console.log("A Grade");
}
else if (percentage < 70 && percentage >= 60) {
    console.log("B Grade");
}
else if (percentage < 60 && percentage >= 50) {
    console.log("C Grade");
}
else {
    console.log("Fail The percentage is below 50");
}

// lets practice switch case to check month
let month = 5
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febraury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    default:
        console.log("Not A Month");
        break;
}

let days = 4
switch (days) {
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;

    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
        
}
// Let's Practice Hoisting .. its similar to template litral style to write in a short way. Hoisting is a shorthand property of writing JS 

// comparison

if (35 > 20) {
    console.log(true);
}
else {
    console.log(false);
}
// hence true and false are boolean data type we dont write it in qoutations
// now do it in hoisting style

let digit = 25
digit > 20 ? console.log(true) : console.log(false);

//  we can also do it like that

65 > 100 ? console.log(true) : console.log(false);

let num = 12
num > 10 ? console.log(true) : console.log(false);

123 > 56 ? console.log(true) : console.log(false);

// that is all the end for today

// rest operator destructuring data 
// remaining values will be assigned to that variable

let arr = [2,4,6,8,10]
console.log(arr);

let [first, second, ...rest] = arr
console.log(first,second,rest[2]);
// console.log(rest[1]);

// merge two arrays using rest operator (...)
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [...arr1 , ...arr2]
console.log(arr3.length);
// to string convert array in to string form
console.log(arr3.toString());

// Methods
// push method (add value to last)
console.log(arr3.push(9));
console.log(arr3.toString());

// pop method (delete last value)
console.log(arr3.pop());
console.log(arr3.toString());


// shift method (remove first element)
console.log(arr3.shift());
console.log(arr3);

// unshift method (add value at first index)
arr3.unshift(20);
console.log(arr3.toString());
// do save it by assigning variable
convert_tostring = arr3.toString()
console.log(convert_tostring);


// string value must be written in qoutations
// join method (add any value with given array)

console.log(arr3.join('Sidra'));

// concat method 
// add two arrays 

console.log(arr1.concat(arr2));
//  save it assign variable to store it
concat_arr= arr1.concat(arr2)
console.log(concat_arr);


// noww

// ARRAY DESTRUCTURING
// FIRST WE DO WITHOUT DESTRUCTURING 1D ARRAY

let arr4 = [1,2,3,4,5,6]
// let n1 = arr4[0];
// let n2 = arr4[1];
// let n3 = arr4[2];
// let n4 = arr4[3];
// let n5 = arr4[4];
// let n6 = arr4[5];
// console.log(n1,n2,n5,n6);

// but now we destructure with destructuring
// like rest operator assign variable

let [n1,n2,n3,n4,n5,n6] = arr4
console.log(n6);

// now destructure multidimensional array without Destructuring
let arr5 = [5, 6, 7, 8, 9, [1, 2, 3]];
// let m1 = arr5[0];
// let m2 = arr5[1];
// let m3 = arr5[2];
// let m4 = arr5[3];
// let m5 = arr5[4];
// let m8 = arr5[5];
// let m9 = arr5[5][0];
// let m6 = arr5[5][1];
// let m7 = arr5[5][2];

// // console.log(m1, m2, m3);
// console.log(m9, m6,m7);



// now destructuring multidimensional array
let [d1,d2,d3,d4,d5,[d6,d7,d8]] = arr5
console.log(d6,d1,d4);

// destructuring with spread operator,, STRING VALUE IN QOUTATION
let arr6 = ['a','b','c','d']
let [b1,...b2] = arr6
console.log(b1);
console.log(b2);

// NOW OBJECT DESTRUCTURING
let obj1 = {
    name : "Sidra",
    age : 24,
    zodiac : "Virgo"
}
let obj2 = {
    name : "farooq",
    age : 62,
    zodiac : "libra"
}

let obj3 = {obj1,obj2}
console.log(obj3);

// without destructuring we do that 
let studentName = obj1.name
console.log(studentName);

let studentAge = obj2.age
console.log(studentAge);



// in this process above we have to save each of the value seperately first 

// destructuring the object vales

let {name : n , age : a , zodiac : z } = obj1
let { name : fn , age : fa , zodiac : fz} = obj2
console.log(n,fn);

// // FOR EACH MTHOD OF LOOPING(iteration)
 let eachMethod = [11,12,13,14,15]
//  console.log(eachMethod[3]);

// //  for loop (test the condition)
// // for (let i=0 ; i < eachMethod.length; i++){
// //     console.log(eachMethod[i]);
// // }
// //  use simply each method now to break that for loop use ehehehe
 
eachMethod.forEach( (value) => console.log(value)) ;

// // now use FOR IN looping method (iterate Index value)
for (let i in eachMethod){
    console.log(eachMethod[i]);
}

for (let value of eachMethod ){
    console.log(eachMethod[value]);
}

// map hogher order methods
const mapOrder = [1,2,3,4,5]
let multipleOfseven = mapOrder.map((value) => { 
return value * 7 });
console.log(multipleOfseven.toString());


let mapReturnVar = mapOrder.map((value, index, mapOrder) => {
    console.log(`values: ${value}, index: ${index}, Array: ${mapOrder}`);
    return value + index;
});

console.log(mapReturnVar);




let multipleOfTwo = mapOrder.map((value) => {
    return value * 5;
});

console.log(multipleOfTwo); // Outputs: [5, 10, 15, 20, 25]


// Reduce Method
const red = [9,88,7,6]
let reduceArrayvalue = red.reduce((prev,current) => {
console.log(prev+current)
return prev + current
}) 
console.log(reduceArrayvalue);

// filter method

const arr7 = [1,2,10,3,4,5,6,11,12,13]
let filterArray = arr7.filter((value) => value > 2 && value < 11)

console.log(arr7);
console.log(filterArray);






























