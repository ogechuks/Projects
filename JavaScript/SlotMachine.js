const prompt = require("prompt-sync")();

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

const depositAmount = deposit();
const lines = getNumberOfLines();