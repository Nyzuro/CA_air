function operationForList(list, operation) {
  let afterOperation = [];
  for (const number of list) {
    afterOperation.push(number + operation);
  }
  return afterOperation;
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Entrez au moins 2 arguments");
    return;
  }
  return arguments;
}

function isValidNumbers(arguments) {
  for (let i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i])) {
      console.error("Entrez des chiffres");
      return;
    }
    arguments[i] = Number(arguments[i]);
  }
  return arguments;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getListAfterOperation() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const numbers = isValidNumbers(arguments);
  if (!numbers) return;
  const operation = numbers.pop();
  return operationForList(numbers, operation);
}

console.log(getListAfterOperation());
