let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let R = `<i class="far fa-hand-rock fa-7x" id="rockIcon"></i>`;
let P = `<i class="far fa-hand-paper fa-7x" id="paperIcon"></i>`;
let S = `<i class="far fa-hand-scissors fa-7x" id="scissorIcon"></i>`;
let yourScore = document.getElementById('yourScore');
let compScore = document.getElementById('compScore');
let y = Number(yourScore.innerHTML);
let c = Number(compScore.innerHTML);
let startbtn = document.getElementById('startbtn');
let audio = new Audio('audio.wav')
let buttonGrp = document.getElementById('buttonGrp');

// function to check winning condition
function checkScore1() {
        if (computer.innerHTML === P) {
            return 0;
        }
        else if (computer.innerHTML === S) {
            return 1;
        }
    
}
function checkScore2() {
        if (computer.innerHTML === S) {
            return 0;
        }
        else if (computer.innerHTML === R) {
            return 1;
        }
    
}
function checkScore3() {
        if (computer.innerHTML === P) {
            return 1;
        }
        else if (computer.innerHTML === R) {
            return 0;
        }
}

// player's input
rock.addEventListener('click', () => {
    playAudio();
    player.innerHTML = R;
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        computer.innerHTML = `<i class="far fa-hand-scissors fa-7x" id="scissorIcon"></i>`;
    }
    else if (x == 2) {
        computer.innerHTML = `<i class="far fa-hand-rock fa-7x" id="rockIcon"></i>`;
    }
    else if (x == 1) {
        computer.innerHTML = `<i class="far fa-hand-paper fa-7x" id="paperIcon"></i>`;
    }
    let inc = checkScore1();
    if (inc == 0) {
        c += 1;
        compScore.innerHTML = c;
    }
    else if (inc == 1) {
        y += 1;
        yourScore.innerHTML = y;
    }
    win(c, y);
})

paper.addEventListener('click', () => {
    playAudio();
    player.innerHTML = P;
    let q = Math.floor(Math.random() * 3);
    if (q == 0) {
        computer.innerHTML = `<i class="far fa-hand-scissors fa-7x" id="scissorIcon"></i>`;
    }
    else if (q == 1) {
        computer.innerHTML = `<i class="far fa-hand-rock fa-7x" id="rockIcon"></i>`;
    }
    else if (q == 2) {
        computer.innerHTML = `<i class="far fa-hand-paper fa-7x" id="paperIcon"></i>`;
    }
    let inc = checkScore2();
    if (inc == 0) {
        c += 1;
        compScore.innerHTML = c;
    }
    else if (inc == 1) {
        y += 1;
        yourScore.innerHTML = y;
    }
    win(c, y);
})

scissor.addEventListener('click', () => {
    playAudio();
    player.innerHTML = S;
    let r = Math.floor(Math.random() * 3);
    if (r == 0) {
        computer.innerHTML = `<i class="far fa-hand-scissors fa-7x" id="scissorIcon"></i>`;
    }
    else if (r == 2) {
        computer.innerHTML = `<i class="far fa-hand-rock fa-7x" id="rockIcon"></i>`;
    }
    else if (r == 1) {
        computer.innerHTML = `<i class="far fa-hand-paper fa-7x" id="paperIcon"></i>`;
    }
    
    let inc = checkScore3();
    if (inc == 0) {
        c += 1;
        compScore.innerHTML = c;
    }
    else if (inc == 1) {
        y += 1;
        yourScore.innerHTML = y;
    }
    win(c, y);

})

// check if score is 3
function win(a, b) {
    if (a == 3) {
        computer.innerHTML = `<h1 id="cWin">Computer Won, Please start again!</h1>`;
        player.innerHTML = "";
        c = 0;
        y = 0;
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
    else if (b == 3) {
        player.innerHTML = `<h1 id="pWin">Congrats, You Won!</h1>`;
        computer.innerHTML = "";
        c = 0;
        y = 0;
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
}

// start new game
startbtn.addEventListener('click', () => {
    compScore.innerHTML = "0";
    yourScore.innerHTML = "0";
    computer.innerHTML = "";
    player.innerHTML = "";
    c = 0;
    y = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
})

// playing audio on every click
function playAudio() {
    audio.play();
}


