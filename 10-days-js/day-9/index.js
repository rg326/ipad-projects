////ANONYMOUS FUNCTIONS

//document.addEventListener('click',function(){
//    alert('Thank you for clicking')
//})

//ANONYMOUS FUNCTIONS

//document.addEventListener('click',() => alert('Thank you for //clicking'))

let myNums = [10, 500, 2000]
//let doubleNums = myNums.map(function(x){
//    return x * 2
//})

let doubleNums = myNums.map(x => x * 2)

console.log(doubleNums)

//For "this", arrow functions point to closest scope, not the global object
imAFuncNotAMethod = () => console.log(this)

////FUNCTION HOISTING
//The ordering of lines matters in JS

cool()

function cool() {
    console.log('This is super cool.')
}
//This is super cool

console.log(strawBerryCount)
let strawBerryCount = 100
//Reference Error: strawberryCount is not defined

let cool = function(){
    console.log('Hey')
} //Reference Error: cool is not defined

////TEMPLATE LITERALS

//let myName = 'Lauren'

//console.log(`Hello,  ${myName}, and the sky is blue.`)

////SEMICOLONS AND AUTO SEMICOLON INSERTION
let myName;console.log(`Hello, my name is ${myName} and the sky is blue.`)