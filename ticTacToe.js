const player1=document.querySelector("#player1");
const player2=document.querySelector("#player2");
const user1Value = localStorage.getItem("user1Name");
const user2Value = localStorage.getItem("user2Name");
player1.innerText=user1Value;
player2.innerText=user2Value;
const changeval = (val) => {
    if(val==="X"){
        return "0";
    }
    else{
        return "X"
    }
}
let winner=false;
const checkwin = (game) => {
    let winvalue = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let ans=false;
    winvalue.forEach( (el) => {
        if((game[el[0]].innerText===game[el[1]].innerHTML)&&(game[el[2]].innerText===game[el[1]].innerHTML)&&(game[el[0]].innerText!=="")){
            game[el[0]].style.backgroundColor="#99ffcc";
            game[el[1]].style.backgroundColor="#99ffcc";
            game[el[2]].style.backgroundColor="#99ffcc";
            ans=game[el[0]].innerText;
        }
    });
    return ans;
}
const game=document.querySelectorAll(".game")
let val="0";
let user1=document.querySelector(".user1score");
let user2=document.querySelector(".user2score");
let count=0;
function eve(){
    function eventcontroller(){
        if(this.innerText===""){
            val = changeval(val);
            this.innerText=val;
            if(val==="X"){
                this.style.color="red";
            }
            else{
                this.style.color="green";
            }
            count++;
        }
        if(winner===false){
            winner=checkwin(game);
            if(winner!==false){
                const wins=document.querySelector(".wins");
                let win="";
                if(winner==="X"){
                    win=user1Value;
                }
                else{
                    win=user2Value;
                }
                wins.innerText=`${win} wins this Round`;
                game.forEach( element=>element.removeEventListener("click",eventcontroller));
                if(winner==="X"){
                    user1.innerText=parseInt(user1.innerText)+1;
                }
                else{
                    user2.innerText=parseInt(user2.innerText)+1;
                }
            }
        }
        if(count===9){
            const wins=document.querySelector(".wins");
            if(wins.innerText===""){
                wins.innerText="It's a draw";
            }
        }
    }
    game.forEach( element=>element.addEventListener("click",eventcontroller));
}
eve();
let nextround=document.querySelector(".nextround");
nextround.addEventListener("click", () =>
    game.forEach( (element) => {
        element.innerText="";
        val="0";
        element.style.backgroundColor="transparent";
        winner=false;
        const wins=document.querySelector(".wins");
        wins.innerText="";
        count=0;
        element.style.color="black";
        eve();
    })
)
