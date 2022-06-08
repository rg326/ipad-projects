//variable declaration
// let age;

// age = 21;

// console.log(age)

// //or 

// let age = 21;

//when accepting user input, it's better to do it in two steps

let firstName = 'Lauren'
let age = '31' //str
let student = true

age = age + 1

console.log('Hello', firstName)
console.log('You are', age, 'years old')
console.log('Enrolled', student)

document.getElementById('p1').innerHTML = 'Hello ' + firstName

document.getElementById('p2').innerHTML = 'You are', age, 'years old'

document.getElementById('p3').innerHTML = 'Enrolled', student