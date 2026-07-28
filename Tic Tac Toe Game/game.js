let boxes= document.querySelectorAll(".game")
let resetbuttons=document.querySelectorAll("#resetbtn")
// let message=document.querySelector("#winnner")
let messagecontainer=document.querySelector(".msg-container");
let gameButton=document.querySelector("#newgame")
let message=document.querySelector("#msg");
let playerX=true;
let count=0;
const resetbutton=()=>{
  for(let boox of boxes){
    boox.disabled=true;
    boox.innerText="";
         boox.disabled=false;
    }
  }
  const gameButtons=()=>{
for(let box of boxes){
  box.disabled=false
box.innerText=""
messagecontainer.classList.add("hide");
}
  }
// const showmessage=()=>{
//   for (let box of boxes){
//     if(checkWinner===true){
// message.innerText=`Congratulations you won the game ${pos1val}`;
//     }
//   }
// }
const showWinner=()=>{
  for(let box of boxes){
          box.disabled=true;
        }
}
const showOnScreen=(champion)=>{
message.innerText=`Congratulations You Won the game "${champion}"`;
messagecontainer.classList.remove("hide")
}
const winnerPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]
const checkWinner=()=>{
    for(let patterns of winnerPatterns){
pos1val=boxes [patterns[0]].innerText,
pos2val=boxes [patterns[1]].innerText,
pos3val=boxes [patterns[2]].innerText;


if(pos1val !== "" && pos2val!==" " && pos3val!=="")
        if(pos1val === pos2val && pos2val=== pos3val){
        console.log( `you won the game ${pos1val}`)
       showWinner();
  showOnScreen(pos1val)
      }

    }
}
boxes.forEach((game) => {
  game.addEventListener("click", () => {
    if (playerX) {
      //playerO
      game.innerText = "X";
      playerX = false;
    } else {
      //playerX
      game.innerText = "O";
      playerX = true;
    }
    game.disabled = true;
    count++;

    let isWinner = checkWinner();

    // if (count === 9 && !isWinner) {
    //   gameDraw();
    // }
  });
});
resetbtn.addEventListener("click",resetbutton)
newgame.addEventListener("click",gameButtons)