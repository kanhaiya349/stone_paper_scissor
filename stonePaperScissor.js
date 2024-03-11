let yourscore=0;
let compscore=0;

const yourscoredata=document.querySelector("#yourscore");
const compscoredata=document.querySelector("#compscore");

const selector=document.querySelectorAll(".select");
const result=document.querySelector(".result");
const youselect=document.querySelector("#youselect");
const compselect=document.querySelector("#compselect");

const reset=document.querySelector("#restart");
reset.addEventListener("click", () => {
    location.reload();
})

const contact=document.querySelector("#contact");
contact.addEventListener("click",() => {
    let a=prompt("Enter 1 if you want to call else enter anything");
    if(a==="1"){
        const phoneNumber = '+919508920251';
            const telLink = document.createElement('a');
            telLink.href = 'tel:' + phoneNumber;
            document.body.appendChild(telLink);
            telLink.click();
            document.body.removeChild(telLink);
    }
})

const computer1 = () => {
    let arr=["stone","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return arr[index];
}

const draw = () => {
    result.innerText = "It's a Draw";
}

const win = (youwin,you,comp) => {
    if(youwin){
        result.innerText = "You win!"
        yourscore++;
        yourscoredata.innerText = yourscore;
    }
    else{
        result.innerText = "you Lose!"
        compscore++;
        compscoredata.innerText=compscore;
    }
}

const gameplay = (you) => {
    const comp = computer1();
    youselect.innerHTML = `<img class="imagegame" src="${you}.png" alt="${you}">`
    compselect.innerHTML= `<p>...Thinking...<\p>`
    setTimeout( () => {
        compselect.innerHTML=`<img class="imagegame" src="${comp}.png" alt="${comp}">`;
        if(you===comp){
            draw();
        }
        else{
            let youwin=true;
            if(you === "stone"){
                youwin = comp === "paper"?false:true;
            }
            else if(you === "paper"){
                youwin = comp === "stone"?true:false;
            }
            else{
                youwin = comp === "paper"?true:false;
            }
            win(youwin,you,comp);
        }
    },500);
};

selector.forEach( (ch) => {
    ch.addEventListener("click", () => {
        const you = ch.getAttribute("id");
        gameplay(you);
    });
});