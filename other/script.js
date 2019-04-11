var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var compScore_span = document.getElementById("comp_score");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");
var result_p = document.querySelector(".result >p");

var compPick;
var userPick = "";

compChoice();

function userChoice(){
    rock_div.addEventListener('click', function(){
        game("Rock");
        compChoice();
    });
    paper_div.addEventListener('click', function(){
        game("Paper");
        compChoice();
    });
    scissors_div.addEventListener('click', function(){
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

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = " Computer picked " + compPick + ". You win!";
}

function lost(){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Computer picked " + compPick + ". You lost!";
}
 
function draw(){
    result_p.innerHTML = "Computer picked " + compPick + ". It's a draw!";
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