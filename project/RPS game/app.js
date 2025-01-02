let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    // console.log("The Game was Draw");
    msg.innerText = "Game was Draw 😮😮, Play again.";
    msg.style.backgroundColor = "#00326b" ;
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("YOU Win! 🎉🎉");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU Win! 🎉🎉, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;
    }
    else{
        // console.log("You Lose!🤦‍♂️🤦‍♂️");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU Lost!🤦‍♂️🤦‍♂️, ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#690303" ;
    }
};
const playGame = (userChoice) =>{
    // console.log("User choice =",userChoice);
    // generate computer chhoice ->modular
    const compChoice = generateCompChoice();
    // console.log("Computer choice",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? true : false ;
        }else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }        
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})