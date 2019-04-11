var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var compScore_span = document.getElementById("comp_score");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");
var result_p = document.querySelector(".result >p");

var objType;
var compPick;
var userPick = "";

compChoice();

function userChoice(){
    rock_div.addEventListener('click', function(){
        getValue("rock");
        game("Rock");
        compChoice();
        
    });
    paper_div.addEventListener('click', function(){
        getValue("paper");
        game("Paper");
        compChoice();
    });
    scissors_div.addEventListener('click', function(){
        getValue("scissors");
        game("Scissors");
        compChoice();
    });
}

function compChoice(){
    var randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum){
        case 1:
            compPick = "Rock";
            break;
        case 2:
            compPick = "Paper";
            break;
        case 3:
            compPick = "Scissors";
            break;
    }
}

function getValue(oType){
        objType = oType; 
        console.log(objType);       
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = " Computer picked " + compPick + ". You win!";
    document.getElementById(objType).classList.add("green_glow");
    setTimeout(function() {document.getElementById(objType).classList.remove("green_glow");},500);
}

function lost(){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Computer picked " + compPick + ". You lost!";
    document.getElementById(objType).classList.add("red_glow");
    setTimeout(function() {document.getElementById(objType).classList.remove("red_glow");},500);
}
 
function draw(){
    result_p.innerHTML = "Computer picked " + compPick + ". It's a draw!";
    document.getElementById(objType).classList.add("grey_glow");
    setTimeout(function() {document.getElementById(objType).classList.remove("grey_glow");},500);
}

function game(choice1){
    if (choice1 == compPick){
        draw();
    } else if (choice1 == "Rock"){
        if (compPick == "Scissors"){
            win();}
        else {
            lost();}

    }else if (choice1 == "Scissors"){
        if (compPick == "Paper"){
            win();}
        else {
            lost();}

    }else if (choice1 == "Paper"){
        if (compPick == "Rock"){
            win();}
        else {
            lost();}
    }
}

userChoice();