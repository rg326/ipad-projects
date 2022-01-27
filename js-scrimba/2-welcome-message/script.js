let welcomeMsg = document.getElementById('welcome-name')
let myName = 'Lauren'
let greeting = 'Hello there, '

welcomeMsg.innerText = (`${greeting}${myName}`)

console.log(welcomeMsg)

//add an emoji to the end!
//WRITE YOUR CODE HERE
//HINT: count = count++;

//welcomeMsg.innerText = welcomeMsg.innerText + "👋"

welcomeMsg.innerText += "👋"