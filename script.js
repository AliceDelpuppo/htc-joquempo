const $buttonStone1 = document.querySelector('#button-stone-p1')
const $buttonPaper1 = document.querySelector('#button-paper-p1')
const $buttonScissor1 = document.querySelector('#button-scissor-p1')

const $buttonStone2 = document.querySelector('#button-stone-p2')
const $buttonPaper2 = document.querySelector('#button-paper-p2')
const $buttonScissor2 = document.querySelector('#button-scissor-p2')

const $fieldPlayer1 = document.querySelector('.player1-field')
const $fieldPlayer2 = document.querySelector('.player2-field')

// let player1Move
// let player2Move
// let winner

function changeImage($player, imageUrl){
    $player.innerHTML = `'<img src="${imageUrl}" class="image">'`
}

function verifyMove(player, move){
    console.log('aqui11')
    if (player == 1) {
        player1Move = move
        console.log(`valor de player1Move ${player1Move}`)
    } else {
        player2Move = move
        console.log(`valor de player2Move ${player2Move}`)
    }    
}

function verifyWinner(player1Move, player2Move){

    console.log(`valor de player1Move ${player1Move}`)
    console.log(`valor de player2Move ${player2Move}`)

    if (player1Move == player2Move) {
        winner = -1
    } else if (player1Move == 'stone' && player2Move == 'paper') {
        winner = 2
    } else if (player1Move == 'stone' && player2Move == 'scissors') {
        winner = 1
    } else if (player1Move == 'paper' && player2Move == 'stone') {
        winner = 1
    } else if (player1Move == 'paper' && player2Move == 'scissors') {
        winner = 2
    } else if (player1Move == 'scissors' && player2Move == 'stone') {
        winner = 2
    } else if (player1Move == 'scissors' && player2Move == 'paper') {
        winner = 1
    }

    console.log(`valor de winner ${winner}`)
}


$buttonStone1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/stone.png')
    verifyMove(1, 'stone')

    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
})

$buttonPaper1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/paper.png')
    verifyMove(1, 'paper')

    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
})

$buttonScissor1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/scissors.png')
    verifyMove(1, 'scissors')
    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
})

$buttonStone2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/stone.png')
    verifyMove(2, 'stone')

    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
    
})

$buttonPaper2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/paper.png')
    verifyMove(2, 'paper')

    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
})

$buttonScissor2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/scissors.png')
    verifyMove(2, 'scissors')

    if (player1Move && player2Move) {
        verifyWinner(player1Move, player2Move)
    }
})

