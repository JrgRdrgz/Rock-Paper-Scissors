let playerPoints=0;
let computerPoints=0;
let roundCounter=0;

//randomly selects the computer's choice
function computerPlay(){
    var choice;
    choice=Math.random()*(4-1)+1;
    if(choice==1){
        return 'rock';
    }
    else if(choise==2){
        return 'paper';
    }
    else if(choice==3){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return 'Tie! Both players chose ${playerSelection}'; 
    }
    else if(playerSelection=='rock' && computerSelection=='paper'){
        return 'You lose! Rock loses to Paper';
    }
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        return 'You win! Rock beats Scissors';
    }
    else if(playerSelection=='paper' && computerSelection=='rock'){
        return 'You win! Paper beats Rock';
    }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        return 'You lose! Paper loses to Scissors';
    }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        return 'You lose! Scissors loses to Rock';
    }
    else if(playerSelection=='scissors' && computerSelection=='paper'){
        return 'You win! Scissors beats Paper';
    }
}


function game(){
    var i;
    for(i=0; i<5; i++){
        playerSelection='rock';
        computerSelection=computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}