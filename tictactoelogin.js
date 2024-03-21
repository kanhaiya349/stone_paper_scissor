const user1data=document.querySelector("#user1data");
const user2data=document.querySelector("#user2data");
const user1name=document.querySelector("#user1name");
const user2name=document.querySelector("#user2name");
user1data.addEventListener("input", () => {
    if(user1data.value!==""){
        user1name.style.opacity=0;
    }
    else{
        user1name.style.opacity=1;
    }
});
user2data.addEventListener("input", () => {
    if(user2data.value!==""){
        user2name.style.opacity=0;
    }
    else{
        user2name.style.opacity=1;
    }
});
const submitButton = document.getElementById("submitbutton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const user1Value = document.getElementById("user1data").value;
    const user2Value = document.getElementById("user2data").value;
    localStorage.setItem("user1Name", user1Value);
    localStorage.setItem("user2Name", user2Value);
    window.location.href = "ticTacToe.html"; // Redirect to the game page
});
