function calculate() {
  //   let firstNumber = document.getElementById("num1");
  //   let firstNumberValue = parseFloat(firstNumber.value);

  let myFirstNumber = parseFloat(document.getElementById("num1").value);
  let mySecondNumber = parseFloat(document.getElementById("num2").value);
  let opeartion = document.getElementById("operation").value;
  //   let resultDisplay = document.getElementById("result").innerHTML = `Result: ${result}`
  let resultDisplay = document.getElementById("result");

  let result;

  switch (opeartion) {
    case "add":
      result = add(myFirstNumber, mySecondNumber);
      break;

    case "subtract":
      result = subtract(myFirstNumber, mySecondNumber);
      break;

    case "multiply":
      result = multiply(myFirstNumber, mySecondNumber);
      break;

    case "divide":
      result = divide(myFirstNumber, mySecondNumber);
      break;

    default:
      result = "Invalid operation";
  }

    resultDisplay.innerHTML = `Result: ${result}`
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
