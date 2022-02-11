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

let timer
let deleteFirstPhotoDelay

const start = async () => {
	try {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    //console.log(data)
    createBreedList(data.message)
	} catch(e){
		console.log('error happened')
		//e is optional; gives the precise info of error that happened
	}
}

start()

//in this instance, 'this' means the select tag
const createBreedList = async (breedList) => {
   document.getElementById('breed')
   	.innerHTML = `
		<select onchange="loadByBreed(this.value)">
			<option>Choose a dog breed</option>
			${Object.keys(breedList)
				.map(breed => {
					return `<option>${breed}</option>`
				})
				.join('')}
		</select>
		`
}

const loadByBreed = async (breed) => {
	if(breed != 'Choose a dog breed'){
		const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
		const data = await res.json()
		createSlideShow(data.message)
	}
}

const createSlideShow = (images) => {
	let CurrPos = 0
	clearInterval(timer)
	clearTimeout((deleteFirstPhotoDelay)
	
	if(images.length > 1){
		document.getElementById('slideshow')
		.innerHTML = `
		<div class="slide" style="background-image: url('${images[0]}')"></div>
		<div class="slide" style="background-image: url('${images[1]}')"></div>
		`
		currPos += 2
		if(images.length == 2) {currPos = 0}
		timer = setInterval(nextSlide, 3000)
	} 
	
	else {
		document.getElementById('slideshow')
		.innerHTML = `
		<div class="slide" style="background-image: url('${images[0]}')"></div>
		<div class="slide"></div>
	`
	}
	
}
	
	function nextSlide() {
		document.getElementById('slideshow')
		.insertAdjacentHTML('beforeend', `<div class="slide" style="background-image: url('${images[currPos]}')"></div>`)
		deleteFirstPhotoDelay = setTimeout(()=>{
			document.querySelector('.slide').remove()
		}, 1000)
		if(currPos += 1 >= images.length) {
			currPos = 0
		} else {
			currPos++
		}
	}
}