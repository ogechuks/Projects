/*
Ogechukwu Chuks
8 February 2024
A terminal-based SlotMachine emulator 
*/

const prompt = require("prompt-sync")();

//A function that is used to deposit money into the slotmachine before bets are made
const deposit = () => {
    let depositAmount = prompt("Enter a deposit amount: ");
        let floatDepositAmount = parseFloat(depositAmount);
    
    if (isNaN(floatDepositAmount) || floatDepositAmount <= 0){
        while (isNaN(floatDepositAmount) || floatDepositAmount <= 0){
            depositAmount = prompt("Please enter a valid deposit amount: ");
            floatDepositAmount = parseFloat(depositAmount);
        }
        return floatDepositAmount;
    }
    else{ 
        return floatDepositAmount;
    }
}

//A function used to get the number of lines the user will want to bet on
const getNumberOfLines = () => {
    let lines = prompt("Enter the number of lines you would like to bet on: ");
    let NumberOfLines = parseFloat(lines);

    if (isNaN(NumberOfLines) || NumberOfLines < 0 || NumberOfLines > 3){
        while (isNaN(NumberOfLines) || NumberOfLines < 0 || NumberOfLines > 3){
            lines = prompt("Please enter a valid number of lines: ");
            NumberOfLines = parseFloat(lines);
        }
        return NumberOfLines;
    }
    else{ 
        return NumberOfLines;
    }

}

//A function used to get the amount that the user will be betting
const getBet = (balance, NumberOfLines) => {
    let bet = prompt("Enter the bet amount per line: ");
    let betAmount = parseFloat(bet) * NumberOfLines;

    if (isNaN(betAmount) || betAmount < 0 || betAmount > balance/NumberOfLines){
        while (isNaN(betAmount) || betAmount < 0 || betAmount > balance/NumberOfLines){
            bet = prompt("Please enter a valid bet amount: ");
            betAmount = parseFloat(bet);
        }
        return betAmount;
    }
    else{ 
        return betAmount;
    }
}

let balance = deposit();
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance, NumberOfLines);