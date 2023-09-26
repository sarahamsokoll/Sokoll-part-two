/*
step 1: Prompt the user for their name.
step 2: Next, prompt the user if they would like to play 3 or 6 holes of mini golf.
Finally, prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.
Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.
After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
If even with par, the message should read "Good game, (name). Your total par was: 0."

*/

let userName = prompt("What is your name?")
let numberHoles = prompt("Would you like to play 3 or 6 holes of mini golf?")

if (numberHoles === "3") {
    console.log("How many putts for hole 1?")
}

if (numberHoles === "6") {
    console.log("How many putts for hole 1?")
}

let numberPutts = prompt("")

// for, while, do... while