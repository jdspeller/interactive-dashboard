const answers = [// Put your JavaScript code in this const answers = [
    "It is certain.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "Outlook good.",
    "Most likely.",
    "My sources say no."
];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    letcircleDiv = document.getElementById("circle");
    circleDiv.innerHTML = answers[index];
    circleDiv.style.display = "block"; 
}

document.getElementById("ball").addEventListener("mousedown", function() {
    let questionField = document.getElementById("question");
    if (questionField.value.trim() === "") {
        alert("Please ask a question before shaking the magic eight ball.");
    } else {
        displayAnswer();
    }
});