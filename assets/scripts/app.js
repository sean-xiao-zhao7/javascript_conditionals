const defaultResult = 0;
let currentResult = defaultResult;
let log = [];

function add() {
    const userInputValue = parseInt(userInput.value);
    const description = `${currentResult} + ${userInputValue}`;
    const initialResult = currentResult;
    currentResult = initialResult + userInputValue;
    outputResult(currentResult, description);
    log.push({
        op: "Add",
        initialResult: initialResult,
        userInputValue: userInputValue,
        currentResult: currentResult,
    });
}

function sub() {
    const userInputValue = parseInt(userInput.value);
    const description = `${currentResult} - ${userInputValue}`;
    const initialResult = currentResult;
    currentResult = initialResult - userInputValue;
    outputResult(currentResult, description);
    log.push({
        op: "Subtract",
        initialResult: initialResult,
        userInputValue: userInputValue,
        currentResult: currentResult,
    });
}

function mul() {
    const userInputValue = parseInt(userInput.value);
    const description = `${currentResult} * ${userInputValue}`;
    const initialResult = currentResult;
    currentResult = initialResult * userInputValue;
    outputResult(currentResult, description);
    log.push({
        op: "Multiply",
        initialResult: initialResult,
        userInputValue: userInputValue,
        currentResult: currentResult,
    });
}

function div() {
    const userInputValue = parseInt(userInput.value);
    const description = `${currentResult} / ${userInputValue}`;
    const initialResult = currentResult;
    currentResult = initialResult / userInputValue;
    outputResult(currentResult, description);
    log.push({
        op: "Divide",
        initialResult: initialResult,
        userInputValue: userInputValue,
        currentResult: currentResult,
    });
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
