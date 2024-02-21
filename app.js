let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    let options = ["stone", "paper", "scissor"];
    const ranIdx =Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame = ()=>{
    console.log("Game is draw");
};

const showWinner = (userWin)=>{
    if(userWin == "true"){
        console.log("You win");
    }else{
        console.log("You lose");
    }
};

const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "stone"){
           if(compChoice === "paper"){
            userWin = false;
           }else if(compChoice === "scissor"){
            userWin = true;
           }
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissor"?false: true;
        }else if(userChoice === "scissor"){
           userWin =  compChoice === "stone"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});