function sortedInsert(firstArray, newElement) {
  const sortedArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] <= newElement) {
      sortedArray.push(firstArray[i]);
    } else {
      sortedArray.push(newElement);
      for (let j = i; j < firstArray.length; j++) {
        sortedArray.push(firstArray[j]);
      }
      return sortedArray;
    }
  }
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Le nombre d'arguments est trop faible");
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

function getSortedArray() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const numbers = isValidNumbers(arguments);
  if (!numbers) return;
  const newElement = numbers.pop();
  return sortedInsert(numbers, newElement);
}

console.log(getSortedArray());
