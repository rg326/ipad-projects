let ourForm = document.getElementById('ourForm')
let input = document.getElementById('inputField')
let list = document.getElementById('itemList')

ourForm.addEventListener('submit', (e)=>{
	e.preventDefault()
	createItem(input.value)
})

function createItem(x){
	let ourHTML = `<li>${x} <button onclick="delItem(this)">Del</button></li>`
	itemList.insertAdjacentHTML('beforeend', ourHTML)
	input.value = ''
	input.focus()
	
}

function delItem(item){
	item.parentElement.remove()
}

//