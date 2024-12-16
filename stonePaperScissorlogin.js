const input1=document.querySelector('#email');
const em1=document.querySelector('#emailLabel');
// input1.addEventListener("focus", () => {
//     em1.style.opacity=0;
// })
// input1.addEventListener("blur", () => {
//     em1.style.opacity=1;
// })
input1.addEventListener("input", () => {
    if(input1.value===""){
        em1.style.opacity=1;
    }
    else{
        em1.style.opacity=0;
    }
})
const input2=document.querySelector('#pass');
const em2=document.querySelector('#passLabel');
// input2.addEventListener("focus", () => {
//     em2.style.opacity=0;
// })
// input2.addEventListener("blur", () => {
//     em2.style.opacity=1;
// })
input2.addEventListener("input", () => {
    if(input2.value===""){
        em2.style.opacity=1;
    }
    else{
        em2.style.opacity=0;
    }
})
const submitButton = document.querySelector("#submit");
const incorrect=document.querySelector(".incorrectp");
submitButton.addEventListener("click", (event) => {
    window.location.href="stonePaperScissor.html";
        event.preventDefault();
});
