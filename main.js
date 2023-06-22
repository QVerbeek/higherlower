console.log("Brava six going dark");

const maximumEyes = 6;      //dit is een vaste variabele die word niet zomaar veranderd

let playerAge = 0;          //Dit zijn de variabelen die kunnen aan gepast worden
let playerName = "Name";
let computerCredits = 10;
let playerCredits = 10;
let computerEyes = 1;
let playerEyes = 1;
let roundCounter = 1;
let playerRounds = [];

const oldEnough = getAge();         //deze variabele zorgt ervoor dat de leeftijd vast blijft staan van de speler

if (oldEnough) {
    console.log("Welcome to Higher-Lower the best game for you");     //dit if-statement zorgt ervoor dat je in de website komt als je je leeftijd hebt ingevuld
    startGame();
} else {
    console.log("You are to young to play this game, come back when you are old enough.");     // als je te jong bent dan kan je niet het spel spelen
}

function startGame() {
    roundCounter = 1;           //Deze function zorgt ervoor dat de rondes van het spel worden geteld
    playerRounds = [];
    setName();

    while (computerCredits > 0 && playerCredits > 0) {
        printToConsole();

        computerEyes = throwDice(maximumEyes);

        let higherLower = prompt(`The computer has rolled ${computerEyes}. Do you roll (higher) or lower (lower) ${playerName}?`);      //Deze variabele zorgen ervoor dat je hoger of lager kan invullen
        let betCredits = prompt(`How many credits would you like to bet ${playerName}? (1..${playerCredits})`);         //bij deze variabele kan je je hoeveelheid credits inzetten

        playerEyes = throwDice(maximumEyes);        //Hierzo word de dice gegooid voor the speler

        alert(`You have thrown ${playerEyes} ${playerName}`);

        betCredits = Number(betCredits);
        higherLower = higherLower.toLowerCase();

        checkBetWinner(higherLower, betCredits);

        const newRound = confirm(`This was round ${roundCounter}, do you want to play another round?`);

        if (newRound == true) {         //deze if zorgt ervoor dat een nieuwe ronde komt als de eerste is gespeeld
            roundCounter++;
        } else {
            break;
        }
    }
}

function getAge() {
    playerAge = prompt("What is your age?", 18);        //deze function zorgt ervoor dat de speler zijn leeftijd invult en het spel kan gaan spelen

    if (playerAge >= 18) {          //als de speler boven de 18 is kan hij het spel spelen
        return true;
    } else if (playerAge < 18) {            //als de speler onder de 18 is kan hij het niet spelen
        return false;
    }
}

function setName() {                    // Hier moet de speler zijn naam invullen zodat in elke prompt en alert waar zijn naam invoorkomt hij die ook krijgt te zien
    playerName = prompt("What is your name?", "Name");
    console.log("The name of the challanger is " + playerName);
}

function throwDice(maxEyes) {                   //Hier word het aantal ogen dat de speler een computer gooit worden gegenereerd tussen de 1 en 6 zoals op een dobbelsteen
    let randomNumber = Math.floor(Math.random() * maxEyes);
    randomNumber++;
    return randomNumber;
}

function checkBetWinner(higherOrLower, betCredits) {            //deze function is gemaakt voor gelijkspel want hierdoor gaan geen credits eraf of erbij bij de speler
    if (computerEyes == playerEyes) {

        alert("It is a draw next time better");

        return;
    }

    if (higherOrLower == "Higher" && computerEyes < playerEyes) {           //deze if zorgt ervoor dat het credit systeem werkt en je credits kan inzetten
        computerCredits -= betCredits;
        playerCredits += betCredits;

        playerRounds.push("Win");                                           // als de speler wint dan krijgt de speler de credits van de computer
    } else if (higherOrLower == "Lose" && computerEyes > playerEyes) {      
        computerCredits -= betCredits;
        playerCredits += betCredits;
        playerRounds.push("Win");
    } else {

        computerCredits += betCredits;          //als de speler hier verliest gaan de credits naar de computer
        playerCredits -= betCredits;
        playerRounds.push("Lose");
    }

    if (computerCredits <= 0) {                 //Deze if laat zien wie er heeft gewonnen de computer of de speler
        alert(` ${playerName} has won gg`);
    } else if (playerName <= 0) {
        alert(`Computer has won L`);
    }

    console.log(playerRounds.length);      // hierdoor word het aantal rondes in de console log geprint

    printToConsole();
}

function printToConsole() {                                             //deze function zorgt ervoor dat alles in de colsole log word geprint en je kan zien wat er allemaal gebeurd in het spel
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log("****************");
    console.log(`Computer credits: ${computerCredits}`);
    console.log(`${playerName} credits: ${playerCredits}`);
    console.log(`Player rounds: ${playerRounds},`);
    console.log("****************");
}


