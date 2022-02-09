function doubleMe(x){
  return x * 2
}

let myFavNum = doubleMe(5) + doubleMe(10)

alert(myFavNum)


let meowsalot = {
    species: 'cat',
    eyeColor: 'green',
    jump: function() {
        alert('Imagine the cat just jumped.')
    }
}

//alert(meowsalot.eyeColor)

meowsalot.jump()