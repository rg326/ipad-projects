// //document.addEventListener('click', ourAmazingFunction);

// function ourAmazingFunction(){
//     alert('Thank you for clicking.')
// }

// function doubleMe(x){
//     return x*2
// }

// console.log(doubleMe(20))

// function createMultiplier(multiplier){
//     return(x){
//         return x * multiplier
//     }
// }

// let doubleMe = createMultiplier(2)
// let tripleMe = createMultiplier(3)
// let quadrupleMe = createMultiplier(4)

// console.log(doubleMe(10))

let myColors = ['red','orange','yellow']

//ForEach enacts a function on each item in an array
//For its argument, it accepts a function

myColors.forEach(saySomethingNice)

//myColors.map()
//myColors.filter()

function saySomethingNice(color){
    console.log(`The color ${color} is a great color.`)
}