function getBothArrays(arguments) {
  let indexFusion;
  for (let i = 0; arguments[i] !== "fusion"; i++) {
    indexFusion = i;
  }
  indexFusion++;

  let firstArray = arguments.slice(0, indexFusion);
  let secondArray = arguments.slice(indexFusion + 1);

  return [firstArray, secondArray];
}

function sortedFusion(firstArray, secondArray) {
  const finalArray = [];
  let i = 0;
  let j = 0;
  while (i < firstArray.length || j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      finalArray.push(firstArray[i]);
      i++;
    } else if (secondArray[j] < firstArray[i]) {
      finalArray.push(secondArray[j]);
      j++;
    } else if (firstArray[i] === secondArray[j]) {
      finalArray.push(firstArray[i]);
      i++;
    }
    if (i === firstArray.length) {
      finalArray.push(secondArray[j]);
      j++;
    } else if (j === secondArray.length) {
      finalArray.push(firstArray[i]);
      i++;
    }
  }
  return finalArray.join(" ");
}

function isValidArguments(arguments) {
  if (arguments.length < 3) {
    console.error("Les arguments doivent etre comme ceci: 10 fusion 15");
    return;
  }
  return arguments;
}

function containsFusion(arguments) {
  const hasFusion = arguments.includes("fusion");
  if (!hasFusion) {
    console.error("Les arguments doivent etre comme ceci: 10 fusion 15");
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

function getSortedFusion() {
  const arguments = containsFusion(isValidArguments(getArguments()));
  if (!arguments) return;

  const numbers = [];
  for (const number of arguments) {
    if (number !== "fusion") numbers.push(isValidNumber(number));
  }
  if (!numbers) return;

  const arrays = getBothArrays(arguments);
  const firstArray = isSortedNumbers(arrays[0]);
  if (!firstArray) return;
  const secondArray = isSortedNumbers(arrays[1]);
  if (!secondArray) return;

  return sortedFusion(firstArray, secondArray);
}

console.log(getSortedFusion());
