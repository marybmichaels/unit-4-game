$(document).ready(function() {

var crystal = $(".crystal")


//Random Number Generator
var ranNum = Math.floor(Math.random()*(102)+19);
$("#ranNumText").text(ranNum);

console.log("ranNum = ", ranNum);
// Random Crystal Numbers
var crys1num = Math.floor(Math.random()*(12)+1);
var crys2num = Math.floor(Math.random()*(12)+1);
var crys3num = Math.floor(Math.random()*(12)+1);
var crys4num = Math.floor(Math.random()*(12)+1);
console.log("c1 = " + crys1num);
console.log("c1 = " + crys2num);
console.log("c1 = " + crys3num);
console.log("c1 = " + crys4num);

// Total Score Value
var score = 0
function showScore () {
    $("#totalScore").text(score);
    return score
}


// Click on Crystal 1
$("#c1").on("click", function() {
    $("#c1").attr("number", crys1num);
    score = score + crys1num;
    showScore();
    return score;
});

// Click on Crystal 2
$("#c2").on("click", function() {
    $("#c2").attr("number", crys2num);
    score = score + crys2num;
    showScore();
    return score;
});

// Click on Crystal 3
$("#c3").on("click", function() {
    $("#c3").attr("number", crys3num);
    score = score + crys3num;
    showScore();
    return score;
});

// Click on Crystal 4
$("#c4").on("click", function() {
    $("#c4").attr("number", crys4num);
    score = score + crys4num;
    showScore();
    return score;
});

var win = 0
$("#winText").text(win);

var lose = 0
$("#lossText").text(lose);

function resetGame() {
    if (score = ranNum) {
        alert("You win!");
    }
    else if (score > ranNum) {
        alert("You lose!");
    }
};

});