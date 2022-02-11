//OLD WAY
//fetch('https://dog.ceo/api/breeds/list/all')
//    .then(function(response){return response.json})
//   .then(function(data){console.log(data)})

//OLD WAY (Short)
//fetch('https://dog.ceo/api/breeds/list/all')
//    .then(res => res.json)
//    .then(data => console.log(data))

//MODERN WAY (Long)
//async function start(){
//    const response = await fetch('https://dog.ceo/api/breeds/list/all')
//    const data = await response.json
//    console.log(data)
//}

//MODERN WAY (Short)

//Fetches Data
const start = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    //console.log(data)
    createBreedList(data.message)
}

const createBreedList = async (breedList) => {
   
}