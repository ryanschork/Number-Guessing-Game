let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
generateTarget = targetNum => {
   return Math.floor(Math. random()*10);
}

// console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    if (humanDifference <= computerDifference) {
        return true
    }
    else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
    else {
        humanScore++;
    }
}

const advanceRound = () => {
    return currentRoundNumber++;
}
