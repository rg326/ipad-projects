let inputField = document.getElementById('input-field')
let changedText = document.getElementById('header-text')

//inputField.value = 'Test text'

//inputField.remove() //removes it from the page

inputField.addEventListener('input', ourFunction)

function ourFunction() {
   if(inputField.value){
       changedText.innerText = inputField.value
   } else {
       inputField.value = 'Please enter text'
   }
}