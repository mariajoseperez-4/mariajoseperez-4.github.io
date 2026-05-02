// 1pt: Simple Functions
function tickUp() {
    let counter = document.getElementById("counter");
    counter.innerText = parseInt(counter.innerText) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.innerText = parseInt(counter.innerText) - 1;
}

// 1pt: Simple For Loop
function runForLoop() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerText = result.trim();
}

// 1pt: Repetition with Condition
function showOddNumbers() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").innerText = result.trim();
}

// 1pt: Arrays
function addMultiplesToArray() {
    let counter = parseInt(document.getElementById("counter").innerText);
    let arr = [];
    if (counter >= 5) {
        for (let i = 5; i <= counter; i += 5) {
            arr.unshift(i);
        }
    }
    console.log(arr);
}

// 2pts: Objects and Form Fields
function printCarObject() {
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;
    let car = { cType: carType, cMPG: carMPG, cColor: carColor };
    console.log(car);
}

// 2pts: Objects and Form Fields pt. 2
function loadCar(carNumber) {
    let car;
    if (carNumber === 1) car = carObject1;
    else if (carNumber === 2) car = carObject2;
    else if (carNumber === 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// 2pt: Changing Styles
function changeColor(colorNumber) {
    let para = document.getElementById("styleParagraph");
    if (colorNumber === 1) para.style.color = "red";
    else if (colorNumber === 2) para.style.color = "green";
    else if (colorNumber === 3) para.style.color = "blue";
}
