let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn0=true;
const winPatterns = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

const resetGame=()=>{ //reset game
  turn0=true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    console.log("box is clicked!");

    if (box.innerText !== "") return; // prevents repeated click

    if(turn0===true){
        box.innerText="O";
        turn0=false;
    }

    else{
        box.innerText="X";
        turn0=true;
    }
    checkWinner();
   })
});

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
    
  }
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations! Winner is ${winner}` ;
  msgContainer.classList.remove("hide");
  disableBoxes();
  
}

const checkWinner=()=>{
  for(let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 !=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("Winner",pos1);
        showWinner(pos1);     
      }
    }


  }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);