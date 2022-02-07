let addBtn = document.getElementById('add-btn')
let todoContainer = document.getElementById('todo-container')
let  inputField = document.getElementById('field')

//adds task
addBtn.addEventListener('click',()=>{
    let task = document.createElement('p')
    let taskDiv = document.createElement('div')
    task.classList.add('task-styling')
    taskDiv.classList.add('taskDiv-styling')
    task.textContent = inputField.value
    todoContainer.appendChild(taskDiv)
    taskDiv.appendChild(task)
    inputField.value = ''

    //adds line-through to finished task
    task.addEventListener('click',()=>{
        let taskBtn = document.createElement('button')
        taskBtn.innerHTML = '-'
        taskBtn.classList.add('btn-styling')
        task.style.textDecoration = 'line-through'
        task.appendChild(taskBtn)
    })

    //removes finished task
    task.addEventListener('dblclick',()=>{
    task.removeChild(taskBtn)
    todoContainer.removeChild(taskDiv) 
    })

})