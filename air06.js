function stringCompare(string, stringToFind) {
  for (let i = 0; i <= string.length; i++) {
    let j = 0;
    while (string[i] === stringToFind[j]) {
      i++;
      j++;
      if (j === stringToFind.length) return true;
    }
    if (j !== 0) {
      i--;
    }
  }
  return false;
}

function findInString(arrayOfStrings, stringToFind) {
  const finalArray = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (!stringCompare(arrayOfStrings[i], stringToFind)) {
      finalArray.push(arrayOfStrings[i]);
    }
  }
  return finalArray.join(", ");
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Le nombre d'arguments est trop faible");
    return;
  }
  for (const argument of arguments) {
    if (typeof argument !== "string") {
      console.error("Entrez une chaine de caractere");
      return;
    }
  }
  return arguments;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getSearchedString() {
  const arrayOfStrings = isValidArguments(getArguments());
  if (!arrayOfStrings) return;
  const stringToFind = arrayOfStrings.pop();
  return findInString(arrayOfStrings, stringToFind);
}

console.log(getSearchedString());
