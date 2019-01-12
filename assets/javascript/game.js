$(document).ready(function() {

// var crystal = $(".crystal")


//Random Number Generator
var ranNum = 0;
function ranNumFunct () {
    ranNum = Math.floor(Math.random()*(102)+19);
    $("#ranNumText").text(ranNum);
}
console.log("ranNum = ", ranNum);
ranNumFunct();


var crys1num = 0;
var crys2num = 0;
var crys3num = 0;
var crys4num = 0;

// Random Crystal Numbers
function crysVarFunct (){
crys1num = Math.floor(Math.random()*(12)+1);
crys2num = Math.floor(Math.random()*(12)+1);
crys3num = Math.floor(Math.random()*(12)+1);
crys4num = Math.floor(Math.random()*(12)+1);
console.log("c1 = " + crys1num);
console.log("c2 = " + crys2num);
console.log("c3 = " + crys3num);
console.log("c4 = " + crys4num);
}
crysVarFunct();

// Show score Variable & Function
var score = 0
function showScore () {
    $("#totalScore").text(score);
    return score;
};


// Click on Crystal 1
$("#c1").on("click", function() {
    $("#c1").attr("number", crys1num);
    score = score + crys1num;
    return score;
});

// Click on Crystal 2
$("#c2").on("click", function() {
    $("#c2").attr("number", crys2num);
    score = score + crys2num;
    return score;
});

// Click on Crystal 3
$("#c3").on("click", function() {
    $("#c3").attr("number", crys3num);
    score = score + crys3num;
    return score;
});

// Click on Crystal 4
$("#c4").on("click", function() {
    $("#c4").attr("number", crys4num);
    score = score + crys4num;
    return score;
});

// Win Variable
var win = 0
function winFunct () {
    $("#winText").text(win);
}
winFunct (); 

// Lose Variable
var lose = 0
function loseFunct () {
    $("#lossText").text(lose);
}
loseFunct();

// Listener for win or loss
$(".crystal").on("click", function() {
    showScore();
    winLose();
});

// Win or Lose Function
function winLose() {
    if (score === ranNum) {
        win = win + 1;
        winFunct();
        console.log("score is:", score);
        resetGame();
        // alert("You win! You guessed: " + score);
        return win;
    }
    else if (score > ranNum) {
        lose = lose + 1;
        loseFunct();
        console.log("score is:", score);
        resetGame();
        // alert("You lose! You guessed: " + score);
        return lose;
    }
};


// Game Reset
function resetGame () {
    ranNumFunct();
    crysVarFunct();
    score = 0;
    showScore()
}

});