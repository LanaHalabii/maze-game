//Initialized variables
let is_game_running = false; 
let score = 0;

//Declared variables
let end;
let start;
let boundaries;
let status_display; 

document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + "<br/>" + "Your Score is: " + score;
}


function countDownTimer(){
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
    if(is_game_running == false || timeleft == 0){
        clearInterval(downloadTimer);
        gameOver();
        document.getElementById("countdown").innerHTML = "Time is up!";
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    }, 1000);
}

function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        displayScore("Game Over!");
        playLosingAudio();
        is_game_running = false;
    }
}

function startGame(){
    displayScore("");
    countDownTimer("");
    is_game_running = true;
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
}

function playWinningAudio(){
    if(endGame) {
        winning_sound = document.getElementById("winning");
        winning_sound.play();
    }
}

function playLosingAudio(){
    if(gameOver) {
        losing_sound = document.getElementById("losing");
        losing_sound.play();
    }
}

function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
        playWinningAudio();
        is_game_running = false;
    }
}

function resetScore() {
    if (score > 0) {
        score = 0; 
        status_display.innerHTML = "Your score is 0"}
    }
    

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");
    resetGame = document.getElementById("button")


    resetGame.addEventListener("click", resetScore)
    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}


