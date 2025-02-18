let inputElem = document.querySelector('input')
let add = document.querySelector('.add')
let trash = document.querySelector('.trash')
let noteBox = document.querySelector('.note__box')
let coloBox = document.querySelectorAll('.color__box')



add.addEventListener('click', add__job)
// inputElem.addEventListener('keyup', add__job__enter)
coloBox.forEach(function(color){
    // console.log(color)
    color.addEventListener('click', function(event){
        // console.log(event.target.style.backgroundColor)
        inputElem.style.backgroundColor = event.target.style.backgroundColor
    })
})


function add__job(){
    // console.log(coloBox.style.backgroundColor)
    let newDiv = document.createElement('div')
    newDiv.classList = 'note'
    newDiv.style.backgroundColor = inputElem.style.backgroundColor
    newDiv.addEventListener('click', function(){
        newDiv.remove()
    })

    let newP = document.createElement('p')
    newP.innerHTML = inputElem.value

    newDiv.appendChild(newP)
    noteBox.appendChild(newDiv)

    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}

document.body.addEventListener('keypress',function(event){
    if(event.which == 13){
        add__job()
    }

})

trash.addEventListener('click', function(){
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
})