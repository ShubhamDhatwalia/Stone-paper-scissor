let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    let options = ["stone", "paper", "scissor"];
    const ranIdx =Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame = ()=>{
    console.log("Game is draw");
    msg.innerText = "Game draw play again";
    msg.style.backgroundColor ="darkOrange";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin === true){
        console.log("You win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText =userScore;
    }else{
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
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
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});