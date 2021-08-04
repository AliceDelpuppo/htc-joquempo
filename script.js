const $buttonStone1 = document.querySelector('#button-stone-p1')
const $buttonPaper1 = document.querySelector('#button-paper-p1')
const $buttonScissor1 = document.querySelector('#button-scissor-p1')

const $buttonStone2 = document.querySelector('#button-stone-p2')
const $buttonPaper2 = document.querySelector('#button-paper-p2')
const $buttonScissor2 = document.querySelector('#button-scissor-p2')

const $fieldPlayer1 = document.querySelector('.player1-field')
const $fieldPlayer2 = document.querySelector('.player2-field')

console.log($fieldPlayer1)
console.log($fieldPlayer2)

$buttonStone1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img src="image/stone.png" class="image">'
})

$buttonPaper1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img src="image/paper.png" class="image">'
})

$buttonScissor1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img src="image/scissors.png" class="image">'
})

$buttonStone2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img src="image/stone.png" class="image">'
})

$buttonPaper2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img src="image/paper.png" class="image">'
})

$buttonScissor2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img src="image/scissors.png" class="image">'
})

