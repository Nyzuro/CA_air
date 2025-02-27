function sortedInsert(numbers, newElement) {
  for (let i = 0; i < numbers.length; i++) {
    if (newElement >= numbers[i] && newElement <= numbers[i + 1]) {
      numbers.splice(i + 1, 0, newElement);
      return numbers;
    } else if (newElement <= numbers[i]) {
      numbers.splice(i, 0, newElement);
      return numbers;
    } else if (newElement >= numbers[i] && numbers[i + 1] === undefined) {
      numbers.splice(i + 1, 0, newElement);
      return numbers;
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

function isValidNumber(number) {
  if (isNaN(number)) {
    console.error("Entrez des chiffres");
    return;
  }
  number = Number(number);
  return number;
}

function isSortedNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      console.error("Le tableau n'est pas trie");
      return;
    }
  }
  return numbers;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getSortedArray() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;

  const numbers = [];
  for (const number of arguments) {
    numbers.push(isValidNumber(number));
  }
  if (!numbers) return;

  const newElement = numbers.pop();
  const sortedNumbers = isSortedNumbers(numbers);
  return sortedInsert(sortedNumbers, newElement);
}

console.log(getSortedArray());
