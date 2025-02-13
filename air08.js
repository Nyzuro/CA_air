function getBothArrays(arguments) {
  const firstArray = [];
  const secondArray = [];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] !== "fusion") firstArray.push(arguments[i]);
    else {
      for (let j = i + 1; j < arguments.length; j++) {
        secondArray.push(arguments[j]);
      }
      return [firstArray, secondArray];
    }
  }
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

function isValidNumbers(arguments) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] !== "fusion") {
      if (isNaN(arguments[i])) {
        console.error("Entrez des chiffres");
        return;
      }
      arguments[i] = Number(arguments[i]);
    }
  }
  return arguments;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getSortedFusion() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const arrayFusion = containsFusion(arguments);
  if (!arrayFusion) return;
  const numbers = isValidNumbers(arguments);
  if (!numbers) return;
  const arrays = getBothArrays(arguments);
  return sortedFusion(arrays[0], arrays[1]);
}

console.log(getSortedFusion());
