// Import the add and subtract functions from the math module
import { add, subtract } from "./math.js";

// Get HTML elements
const number1Element = document.getElementById("number1");
const number2Element = document.getElementById("number2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const resultElement = document.getElementById("result");

// Add event listeners for the buttons
addButton.addEventListener("click", () => {
    const number1 = parseFloat(number1Element.value);
    const number2 = parseFloat(number2Element.value);
    const result = add(number1, number2);
    resultElement.textContent = result;
});

subtractButton.addEventListener("click", () => {
    const number1 = parseFloat(number1Element.value);
    const number2 = parseFloat(number2Element.value);
    const result = subtract(number1, number2);
    resultElement.textContent = result;
});