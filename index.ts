#! /usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'

const exchange_rate: any ={
    USD: 1,
    EUR: 0.91,
    IND: 74.56,
    PKR: 280,
    IRNR: 42075,
    YUEN: 7.25,
    SUDR: 3.75
}
let userAnswer = await inquirer.prompt(
    [
        {
            name: 'From',
            type: 'list',
            message: 'Enter from currency',
            choices: ['USD', 'EUR', 'IND', 'PKR', 'IRNR', 'YUEN', 'SUDR']
        },
        {
            name: 'To',
            type: 'list',
            message: 'Enter to currency',
            choices: ['USD', 'EUR', 'IND', 'PKR', 'IRNR', 'YUEN', 'SUDR']
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter your amount'
        }
        
    ]
)
        let fromCurrency = exchange_rate[userAnswer.From]
        let toCurrency = exchange_rate[userAnswer.To]
        let amount = userAnswer.amount
        // Formula of currency converter
        let convertamount = amount/fromCurrency
        let convertedAmount = convertamount*toCurrency
        console.log(chalk.greenBright(`\n\tyour converted amount is: ${convertedAmount}`));
        