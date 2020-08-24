var score = 0;
var aWidth;
var aHeight;
var pWidth;
var pHeight;
var timer; //for game loop
var iterations = 0;
var totalTime = 31;
var timeLeft = 0;

//variables to hold DOM
var gameArea;
var dot;
var scoreLabel;
var gameOver;
var timeIndicator;


window.addEventListener('load',setGameAreaBounds);
window.addEventListener('resize',setGameAreaBounds);

function setGameAreaBounds(){
    gameArea = document.getElementById('gameArea');
    dot = document.getElementById('dot');
    scoreLabel = document.getElementById('scoreLabel');
    gameOver = document.getElementById('gameOver');
    timeIndicator = document.getElementById('timeIndicator');

    //Gets width and height of the screen
    aWidth = window.innerWidth;
    aHeight = window.innerHeight;

    //sets the height and 
    pWidth = aWidth - 22;
    pHeight = aHeight - 97;

    
    gameArea.style.width = pWidth + 'px';
    gameArea.style.height = pHeight + 'px';

    console.log("pWidth: " + pWidth + ", pHeight: " + pHeight);

    timeIndicator.style.color ='red';
    timeIndicator.style.paddingLeft = '90px';
    timeIndicator.style.fontSize = '15px';
//    timeIndicator.style.top = '35px';
    dot.addEventListener('click',detectHit);

    pWidth -= 74;
    pHeight -= 74;

    timeLeft = totalTime;
    timeIndicator.innerHTML ="Time Left: " +  timeLeft + " Seconds";
    moveDot();

}

function detectHit(){
    score += 1;
    scoreLabel.innerHTML = "Score: " + score; 
}

function moveDot(){
    var x = Math.floor(Math.random() * pWidth);
    var y = Math.floor(Math.random() * pHeight);
    if(x < 10){
        x = 10;
    }
    if(y < 10){
        y = 10;
    }
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    if(iterations < 30){
        timer = setTimeout("moveDot()",1000);
        timeLeft -=1;
        timeIndicator.innerHTML = "Time Left : " + timeLeft + " Seconds";
    }
    else{
        gameOver.innerHTML = "    Game Over!";
        gameOver.style.color = '#ff0000';
        timeIndicator.innerHTML = "Time Left : " + 0 + " Seconds";
        dot.removeEventListener('click',detectHit);
        clearTimeout(timer);
    }
    iterations++;
}

