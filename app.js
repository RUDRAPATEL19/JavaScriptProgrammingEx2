/*
Author: Rudra Patel
Title: Working with Strings
Date: 2024-01-19
*/

let l = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';

let firstName = 'Rudra';
let lastName = "Parel";
let age = 19;

console.log(l);

// Concatenation
let messageConcat = 'My name is ' + firstName + ' ' + lastName + ' '
    + 'and my age is ' + age + '.';

console.log(messageConcat);
console.log(l);

let msgStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}.`;
console.log(msgStringLiteral);

console.log('Length of messageConcat', messageConcat.length);


// New LINE
let a = 'Add a new line\n\n\tThis is new line';
console.log(a);

let z = 'To add a new line in a JS string, use the \\n character';
console.log(z);
console.log(l);

let b = 'abcdefg';
console.log(b);
console.log(b.toUpperCase());
console.log(b);
b = b.toUpperCase();
console.log(b);
b = b.toLowerCase();
console.log(b);

//substr
//abcdefg
//0123456
let c = b.substr(2, 4);  
console.log(c);
console.log(b);

//substring
//abcdefg
//0123456
let d = b.substring(2, 6);  //ending index is not inclusive
console.log(d);

// indexOf
let myName = 'Christopher';
let index = myName.indexOf('top');
console.log(index);