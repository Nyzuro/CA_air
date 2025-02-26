function findInString(strings, stringToFind) {
  for (const string of strings) {
    for (let i = 0; i < string.length; i++) {
      let countSameChar = 0;

      for (let j = 0; j < stringToFind.length; j++)
        if (string[i + j] === stringToFind[j]) countSameChar++;

      if (countSameChar === stringToFind.length - 1) {
        strings.splice(string, 1);
        break;
      }
    }
  }
  return strings.join(", ");
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Le nombre d'arguments est trop faible");
    return;
  }
  return arguments;
}

function isValidStrings(strings) {
  for (const string of strings) {
    if (!isNaN(string)) {
      console.error("Entrez une chaine de caractere");
      return;
    }
  }
  return strings;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getSearchedString() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const strings = isValidStrings(arguments);
  if (!strings) return;

  const stringToFind = strings.pop();

  return findInString(strings, stringToFind);
}

console.log(getSearchedString());
