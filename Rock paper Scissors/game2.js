alert("Bhag jao !!!!!!")
let Rock=document.querySelector(".rock")
let paper=document.querySelector(".Paper")
let Scissors=document.querySelector(".scissors")
let allimg=document.querySelector("#photos")
let choices=document.querySelector(".choice")
let Images=document.querySelectorAll(".images")
let Showscore=document.querySelector(".showscore")
let Userscore=document.querySelector("#userscore")
let Systemscore=document.querySelector("#systemscore")
let state=document.querySelector(".state")
let statetext=document.querySelector(".state_text")
let choiceDivs = document.querySelectorAll(".rock, .Paper, .scissors")
choiceDivs.forEach((div)=>{
    console.log(div)
    div.addEventListener("click",()=>{
        const userChoice=div.getAttribute("data-value")
        console.log("User Choice =" ,userChoice)
        playGame(userChoice)
    })
})
const showWinner=(userWin)=>{
if(userWin){
    console.log("YOU WON ")
Userscore.innerHTML++;
statetext.innerText=("Congrats,You Won")
statetext.style.backgroundColor = "green";  
}
else{
    console.log("YOU LOSE")
Systemscore.innerHTML++;
statetext.innerText=("OOPS, YOU LOSE")
statetext.style.backgroundColor = "red";  

}
}
const systemChoice=()=>{
    const options=["rock","paper","scissors"]
const randomidx=Math.floor(Math.random()*3)
return options[randomidx]
}
const playGame=(userChoice)=>{
    const compChoice=systemChoice()
    console.log("System Choice -->",compChoice)
    if(userChoice===compChoice)
    {
        console.log("Game Was Draw")
       statetext.innerText=("Game Was Draw")
        statetext.style = "background-color: rgb(49, 49, 124)"
//   statetext.style="border:2px solid yellow"

    }
else {
    let userWin=true
if(userChoice==="rock"){
    userWin=compChoice==="paper" ? false :true
}
else if(userChoice==="paper"){
    userWin=compChoice==="scissors" ? false : true
}
else{
       userWin = compChoice==="rock" ? false : true
}
showWinner(userWin)
}
}