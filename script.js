let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;
let spam = 0, repeatIteration = false;
let roundResult, finalResult;


//Computer moves/choices

function computerPlay(choice) 
{ 
    const choices = ['rock', 'paper', 'scissors'];
    choice = choices[ Math.floor(Math.random() * 2.99)];
    
    return choice;
}

const capitalize = (string) => 
{
    string = string.toLowerCase();
    firstChar = string.charAt(0).toUpperCase();
    restOfString = string.slice(1);

    return string = firstChar + restOfString;
}


//Abstraction of winning a round

function wins()
{
    roundResult = `You've won this round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    playerScore++;

    return roundResult;
}

//Abstraction of losing a round

function loses()
{
    roundResult = `You've lost this round. ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}...`;
    computerScore++;

    return roundResult;
}

//Round of Rock Paper Scissors

function roundOfRPS(playerSelection, computerSelection)
{
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'
        || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'
        || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper')
    {
        wins();
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'
            || playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'
            || playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock')
    {
        loses();
    }

    else
    {
        repeatIteration = true;

        if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) 
        {
            roundResult = 'https://tenor.com/view/harry-potter-duel-gif-18260616';
        }

        else
        {
            spam++;
            
            if (spam > 6)
            {
                roundResult = 'Please stop spamming and play the game as intended. I admire the experimentation though.'; 
            }

            else
            {
                roundResult = "I don't think that's an option... give it another go!";
            }
        }
    }
}

/* The game itself including 5 rounds of Rock Paper Scissors with
persistent prompt of player input after each round */

function game()
{
    for (let i = 1; i <= 5; i++)
    {   
       computerSelection = computerPlay();
       console.log(`Round ${i}!`);
       playerSelection = prompt('Rock, paper, or scissors?');
       roundOfRPS(playerSelection, computerSelection);

       if (repeatIteration == true)
       {
           i--;
           repeatIteration = false;
       }

       alert(roundResult);
       console.log(roundResult);

       alert(`Your score: ${playerScore} vs the Computer's score: ${computerScore}`);
    }

    if (computerScore < playerScore)
    {
        alert(`You won!! Celebrate with another go against it`);
    }

    else
    {
        alert(`You lost to the machine unfortunately. Wanna get your revenge?`);
    }
}

//Invoking the function for playing 5 rounds of Rock Paper Scissors

game();



