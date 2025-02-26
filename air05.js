function operationForList(numbers, operation) {
  const numbersAfterOperand = [];
  for (const number of numbers) {
    numbersAfterOperand.push(number + operation);
  }
  return numbersAfterOperand;
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Entrez au moins 2 arguments");
    return;
  }
  return arguments;
}

function isValidNumber(number) {
  if (isNaN(number)) {
    console.error("Entrez des chiffres");
    return;
  }

  number = Number(number);
  return number;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getListAfterOperation() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;

  const numbers = [];
  for (const number of arguments) {
    numbers.push(isValidNumber(number));
  }
  if (!numbers) return;

  const operation = numbers.pop();
  return operationForList(numbers, operation);
}

console.log(getListAfterOperation());
