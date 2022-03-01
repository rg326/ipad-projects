let myFavNum = 7
let myFavNums = [9,2,8,3,7,4]
let myWords = ['red', 'orange', 'yellow']
let myPets = [
    {
    name: 'Meowsalot',
    species: 'cat',
    },
{
    name: 'Barksalot',
    species: 'dog'
    }]

myWords.push('green')
console.log(myWords)

let myName = 'Brad'
console.log(myName.toUpperCase)

let myNum = 7.89
console.log(myNum.toFixed)

myWords.splice(1, 1)
console.log(myWords)
//splice(index pos, amount of items to remove)

console.log(myFavNums[3])

console.log(myPets[1].species)