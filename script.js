let userName = prompt("Welcome to GC Mini Golf! What is your name?")
let numberOfHoles = prompt(`Hello, ${userName}! Would you like to play 3 or 6 holes of mini golf?`)
console.log(userName)
console.log(numberOfHoles)

let par = 0
let total = 0


if (numberOfHoles === "3") {
    par = 9;
    let Hole1 = prompt("How many putts for hole 1?");
    let Hole2 = prompt("How many putts for hole 2?");
    let Hole3 = prompt("How many putts for hole 3?");
    total = Number(Hole1) + Number(Hole2) + Number(Hole3) - par;
    if (total > 9) {
    console.log(`Nice try, ${userName}... Your total par was:` + total + ".");
    }
    if (total < 9) {
    console.log(`Great job, ${userName}! Your total par was:` + total + ".");
    }
    if (total === 9) {
    console.log(`Good game, ${userName}. Your total par was:` + total + ".");
    }
}

if (numberOfHoles === "6") {
    par = 18;
    let Hole1 = prompt("How many putts for hole 1?");
    let Hole2 = prompt("How many putts for hole 2?");
    let Hole3 = prompt("How many putts for hole 3?");
    let Hole4 = prompt("How many putts for hole 4?");
    let Hole5 = prompt("How many putts for hole 5?");
    let Hole6 = prompt("How many putts for hole 6?");
    total = Number(Hole1) + Number(Hole2) + Number(Hole3) + Number(Hole4) + Number(Hole5) + Number(Hole6) - par;
    if (total > 18) {
        console.log(`Nice try, ${userName}... Your total par was:` + total + ".");
        }
        if (total < 18) {
        console.log(`Great job, ${userName}! Your total par was:` + total + ".");
        }
        if (total === 18) {
        console.log(`Good game, ${userName}. Your total par was:` + total + ".");
        }
}