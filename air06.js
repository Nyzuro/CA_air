function findSearchedInString(arrayOfStrings, stringToFind) {
  const finalArray = [];
  for (const string of arrayOfStrings) {
    let stringCompare = "";
    for (let i = 0; string[i]; i++) {
      if (string[i] === stringToFind[0]) {
        for (let j = i; stringCompare.length < stringToFind.length; j++) {
          stringCompare += string[j];
        }
      }
    }
    if (!stringCompare) {
      finalArray.push(string);
    } else if (stringCompare !== stringToFind) {
      finalArray.push(string);
    }
  }
  return finalArray;
}

function isValidArguments(arguments) {
  if (arguments.length < 2) {
    console.error("Le nombre d'arguments est trop faible");
    return;
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
  return findSearchedInString(arrayOfStrings, stringToFind);
}

console.log(getSearchedString());
