window.addEventListener('load',()=>{
	const form = document.querySelector('#series-form')
	const input = document.querySelector('#input-field')
	const seriesList = document.querySelector('#series-list')
	
	form.addEventListener('submit',(e)=>{
		e.preventDefault();
		
		const series = input.value;
		
		if(!series) {
			alert('Please fill out the field')
			return //we don't want anything else to happen
		} 
		
		const seriesItem = document.createElement('div')
		seriesItem.classList.add('series-item')
		
		const seriesContent = document.createElement('div')
		seriesContent.classList.add('series-content')
		
		seriesItem.appendChild(seriesContent)
	
		const seriesInput = document.createElement('input')
		seriesInput.classList.add('series-input')
		seriesInput.type = 'text'
		seriesInput.value = series
		seriesInput.setAttribute('readonly', 'readonly')
		
		seriesContent.appendChild(seriesInput)
		
		const seriesActions = document.createElement('div')
		seriesActions.classList.add('series-actions')
		
		const seriesEdit = document.createElement('button')
		seriesEdit.classList.add('edit')
		seriesEdit.innerHTML = 'Edit'
		
		const seriesDelete = document.createElement('button')
		seriesDelete.classList.add('delete')
		seriesDelete.innerHTML = 'Delete'
		
		seriesActions.appendChild(seriesEdit)
		seriesActions.appendChild(seriesDelete)
		
		seriesItem.appendChild(seriesActions)
		
		seriesList.appendChild(seriesItem)
		
		input.value = ''
		
		//EDIT
		seriesEdit.addEventListener('click', () => {
			if(seriesEdit.innerText.toLowerCase() == 'edit'){
			seriesInput.removeAttribute('readonly')
			seriesInput.focus()
			seriesEdit.innerText = 'Save'
		} else {
			seriesInput.setAttribute('readonly','readonly')
			seriesEdit.innerText = 'Edit'
		}
		})
		
		//DELETE
		seriesDelete.addEventListener('click', ()=>{
			seriesList.removeChild(seriesItem)
			
		})
	})
})

