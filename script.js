let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function changeSign() {
    if (currentInput !== "") {
        if (currentInput[0] === '-') {
            currentInput = currentInput.slice(1);
        } else {
            currentInput = '-' + currentInput;
        }
        document.getElementById("display").value = currentInput;
    }
}
