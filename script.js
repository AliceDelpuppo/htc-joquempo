const $buttonStone1 = document.querySelector('#button-stone-p1')
const $buttonPaper1 = document.querySelector('#button-paper-p1')
const $buttonScissor1 = document.querySelector('#button-scissor-p1')

const $buttonStone2 = document.querySelector('#button-stone-p2')
const $buttonPaper2 = document.querySelector('#button-paper-p2')
const $buttonScissor2 = document.querySelector('#button-scissor-p2')

const $fieldPlayer1 = document.querySelector('.player1-field')
const $fieldPlayer2 = document.querySelector('.player2-field')

const $winnerName = document.querySelector('.winner-title')

const $scoreboardPlayer1 = document.querySelector('.scoreboard-player1')
const $scoreboardPlayer2 = document.querySelector('.scoreboard-player2')

const $startGame = document.querySelector('.start-game')
const $resetGame = document.querySelector('.reset-game')

let player1Move
let player2Move
let scorePlayer1 = 0
let scorePlayer2 = 0

function changeImage($player, imageUrl){
    $player.innerHTML = `'<img src="${imageUrl}" class="image">'`
}

function verifyMove(player, move){
    console.log('aqui')
    if (player == 1) {
        player1Move = move

        console.log(`valor de player1MoveVerifyMove ${player1Move}`)

    } else {
        player2Move = move

        console.log(`valor de player2MoveVerifyMove ${player2Move}`)

    }    
}

function verifyWinner(player1Move, player2Move){

    console.log(`valor de player1MoveVerifyWinner ${player1Move}`)
    console.log(`valor de player2MoveVerifyWinner ${player2Move}`)

    if (player1Move == 'stone' && player2Move == 'paper') {
        return 2
    } else if (player1Move == 'stone' && player2Move == 'scissors') {
        return 1
    } else if (player1Move == 'paper' && player2Move == 'stone') {
        return 1
    } else if (player1Move == 'paper' && player2Move == 'scissors') {
        return 2
    } else if (player1Move == 'scissors' && player2Move == 'stone') {
        return 2
    } else if (player1Move == 'scissors' && player2Move == 'paper') {
        return 1
    } else if (player1Move == player2Move) {
        return -1
    }

    console.log(`valor de winner - não deveria ter chegado aqui ${winner}`)
}

function printWinnerName (winner){
    if (winner == 1) {
        $winnerName.innerHTML = 'Jogador 1 ganhou'
    } else if (winner == 2) {
        $winnerName.innerHTML = 'Jogador 2 ganhou'
    } else {
        $winnerName.innerHTML = 'Empatou'
    }
}

function givePoint(winner){
    if (winner == 1) {
        scorePlayer1 += 1
    } else if (winner == 2) {
        scorePlayer2 += 1
    }
}

function printPoints(scorePlayer1, scorePlayer2){
    $scoreboardPlayer1.innerHTML = scorePlayer1
    $scoreboardPlayer2.innerHTML = scorePlayer2
}


// ------ Funções de resets
function resetVariables(){
    player1Move = ''
    player2Move = ''
}

function resetFields(){
    $fieldPlayer1.innerHTML = ''
    $fieldPlayer2.innerHTML = ''
}

function resetWinnerTitle(){
    $winnerName.innerHTML = 'Jogue'
}

function resetScore(){
    $scoreboardPlayer1.innerHTML = '0'
    $scoreboardPlayer2.innerHTML = '0'
}

function resetScorePlayerVariables(){
    scorePlayer1 = 0
    scorePlayer2 = 0   
}

function resetAll(){
    resetVariables()
    resetFields()
    resetWinnerTitle()
    resetScore()
    resetScorePlayerVariables()    
}
// ------ /Funções de resets


// ------ Botões




// ------ Jogadas player 1


$buttonStone1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/stone.png')
    verifyMove(1, 'stone')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    }
})

$buttonPaper1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/paper.png')
    verifyMove(1, 'paper')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    }

})

$buttonScissor1.addEventListener('click', function(){
    changeImage($fieldPlayer1, 'image/scissors.png')
    verifyMove(1, 'scissors')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    }

})


// ------ Jogadas player 1


$buttonStone2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/stone.png')
    verifyMove(2, 'stone')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    } 
})

$buttonPaper2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/paper.png')
    verifyMove(2, 'paper')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    }
})

$buttonScissor2.addEventListener('click', function(){
    changeImage($fieldPlayer2, 'image/scissors.png')
    verifyMove(2, 'scissors')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, 2000)
        setTimeout(resetWinnerTitle, 2000)
    }
})

