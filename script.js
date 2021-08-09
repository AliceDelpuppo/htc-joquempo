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

const $buttonStartGame = document.querySelector('.start-game')
const $buttonResetGame = document.querySelector('.reset-game')

const setTimeOutFields = 1500

let player1Move
let player2Move
let scorePlayer1 = 0
let scorePlayer2 = 0
let gameStart = false

function changeImage($player, imageUrl){
    $player.innerHTML = `'<img src="${imageUrl}" class="image">'`
}

function verifyMove(player, move){
    if (player == 1) {
        player1Move = move
    } else {
        player2Move = move
    }    
}

// ------ Função que verifica o vencedor do jogo
function verifyWinner(player1Move, player2Move){
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
}
// ------ /Função que verifica o vencedor do jogo


// ------ Funções que imprimem no HTML o vencedor e os pontos de cada jogador 
function printWinnerName (winner){
    if (winner == 1) {
        $winnerName.innerHTML = 'Jogador 1 ganhou'
    } else if (winner == 2) {
        $winnerName.innerHTML = 'Jogador 2 ganhou'
    } else {
        $winnerName.innerHTML = 'Empatou'
    }
}

function printPoints(scorePlayer1, scorePlayer2){
    $scoreboardPlayer1.innerHTML = scorePlayer1
    $scoreboardPlayer2.innerHTML = scorePlayer2
}
// ------ /Funções que imprimem no HTML o vencedor e os pontos de cada jogador 


// ------ Função que adiciona ponto ao placar do vencedor
function givePoint(winner){
    if (winner == 1) {
        scorePlayer1 += 1
    } else if (winner == 2) {
        scorePlayer2 += 1
    }
}
// ------ /Função que adiciona ponto ao placar do vencedor


// ------ Funções de reset
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

function resetGameStart(){
    gameStart = false
	$buttonStartGame.classList.remove('button-active')
	$buttonStartGame.innerHTML = 'Iniciar'
}

function resetAll(){
    resetVariables()
    resetFields()
    resetWinnerTitle()
    resetScore()
    resetScorePlayerVariables()
    resetGameStart()
}
// ------ /Funções de resets


// ------ Botões

$buttonStartGame.addEventListener('click', function(){
    if (gameStart == false) {
        gameStart = true
		$buttonStartGame.classList.add('button-active')
		$buttonStartGame.innerHTML = 'Parar'
    } else {
		gameStart = false
		$buttonStartGame.classList.remove('button-active')
		$buttonStartGame.innerHTML = 'Iniciar'
    }
})

$buttonResetGame.addEventListener('click', resetAll)
// ------ /Botões


// ------ Comemoração do vencedor
function addFireWorks(winner) {
	if (winner == 1) {
		$fieldPlayer1.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`

		$fieldPlayer2.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_j2JmsU.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`

	} else if (winner == 2) {
		$fieldPlayer1.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_j2JmsU.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`

		$fieldPlayer2.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_jR229r.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`

	} else {
		$fieldPlayer1.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_k6hrfq79.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`

		$fieldPlayer2.innerHTML = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_k6hrfq79.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`
	}
}
// ------ /Comemoração do vencedor


// ------ Jogadas player 1
$buttonStone1.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer1, 'image/stone.png')
    verifyMove(1, 'stone')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    }
})

$buttonPaper1.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer1, 'image/paper.png')
    verifyMove(1, 'paper')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    }
})

$buttonScissor1.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer1, 'image/scissors.png')
    verifyMove(1, 'scissors')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    }
})
// ------ /Jogadas player 1


// ------ Jogadas player 2
$buttonStone2.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer2, 'image/stone.png')
    verifyMove(2, 'stone')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    } 
})

$buttonPaper2.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer2, 'image/paper.png')
    verifyMove(2, 'paper')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    }
})

$buttonScissor2.addEventListener('click', function(){

    if (gameStart == false) return

    changeImage($fieldPlayer2, 'image/scissors.png')
    verifyMove(2, 'scissors')

    if (player1Move && player2Move) {
        const winner = verifyWinner(player1Move, player2Move)
		addFireWorks(winner)
        printWinnerName(winner)
        givePoint(winner)
        printPoints(scorePlayer1, scorePlayer2)
        resetVariables()
        setTimeout(resetFields, setTimeOutFields)
        setTimeout(resetWinnerTitle, setTimeOutFields)
    }
})
// ------ /Jogadas player 2

