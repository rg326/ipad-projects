let pets = [
    {name: 'Meowsalot',
    species: 'cat',
    age: 2},
    {name: 'Barksalot',
    species: 'dog',
    age: 3},
    {name: 'Purrsloud',
    species: 'cat',
    age: 8}
]

pets.push({name: 'Puppster', species: 'dog', age: 1})
console.log(pets)

//pets.splice(3, 1)

console.log(pets)



console.log(pets.slice(2,3))

let ourTest = pets.map(nameOnly)

function nameOnly(x){
    return x.name
}

//let newPets = pets.map(pet => {
//    pet
//})

//console.log(ourTest)

let dogs = pets.filter(onlyDogs)

function onlyDogs(x) {
    return x.species == 'dog'
}

function onlyBabies(x) {
    return x.age < 3
}

let babyDogNames = pets
    .filter(onlyDogs)
    .filter(onlyBabies)
    .map(nameOnly)

console.log(babyDogNames)