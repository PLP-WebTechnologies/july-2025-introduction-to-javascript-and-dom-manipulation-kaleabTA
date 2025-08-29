// ========================
// Part 1: JavaScript Basics
// ========================

// Variable declaration and conditional
const heading = document.getElementById("mainHeading");
const userMessage = document.getElementById("userMessage");
const numInput = document.getElementById("numInput");
const checkNumberBtn = document.getElementById("checkNumberBtn");

checkNumberBtn.addEventListener("click", function() {
    const num = Number(numInput.value);

    if (num > 0) {
        userMessage.textContent = "The number is positive!";
    } else if (num < 0) {
        userMessage.textContent = "The number is negative!";
    } else {
        userMessage.textContent = "The number is zero!";
    }
});

// ========================
// Part 2: JavaScript Functions
// ========================

// Function to square a number
function squareNumber(n) {
    return n * n;
}

// Function to greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JS Mastery.`;
}

console.log(squareNumber(5)); // Example usage
console.log(greetUser("Alice"));

// ========================
// Part 3: JavaScript Loops
// ========================

// Loop example 1: for loop to generate a list of numbers
const listContainer = document.getElementById("listContainer");
let listHTML = "<ul>";
for (let i = 1; i <= 5; i++) {
    listHTML += `<li>Item ${i}</li>`;
}
listHTML += "</ul>";
listContainer.innerHTML = listHTML;

// Loop example 2: while loop to count down
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ========================
// Part 4: DOM Manipulation
// ========================

// DOM Interaction 1: change heading text
heading.textContent = "Mastering JavaScript with DOM!";

// DOM Interaction 2: toggle heading color
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function() {
    heading.classList.toggle("red");
});

// DOM Interaction 3: create and append a new paragraph
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was created dynamically via JavaScript!";
document.body.appendChild(newPara);
