// // let myName = 'Lauren'

// // function myFunc(){
// // //let myName = 'Lauren the 2nd
// //     if(2 + 2 == 4){
// //     console.log(myName)
// //     }
// // }

// // myFunc()

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     driveCar(){
//         function imAFuncNotAMethod(){
//             console.log(this)
//         }
//         imAFuncNotAMethod()
//         console.log(`${this.firstName} ${this.lastName} is driving a car.`)
//     }
// }

// john.driveCar()

function breathe(){
    console.log(`${this.firstName} ${this.lastName} just inhaled and exhaled.`)
}

breathe.call(john)