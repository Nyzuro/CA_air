function stringCompare(string, stringToFind, index) {
  let i = index;
  let j = 0;
  while (string[i] === stringToFind[j]) {
    i++;
    j++;
    if (j === stringToFind.length) {
      return true;
    }
  }
  return false;
}

function split(stringToCut, stringSeparator) {
  let string = "";
  const stringSplited = [];
  for (let index = 0; index < stringToCut.length; index++) {
    if (stringToCut[index] === stringSeparator[0]) {
      const isSeparator = stringCompare(stringToCut, stringSeparator, index);
      if (isSeparator) {
        stringSplited.push(string);
        string = "";
        index += stringSeparator.length - 1;
      } else string += stringToCut[index];
    } else string += stringToCut[index];
  }
  stringSplited.push(string);
  return stringSplited;
}

function isValidArguments(arguments) {
  if (arguments.length !== 2) {
    console.error("Entrez une chaine de caractere et un separateur seulement");
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

function getStringSplit() {
  const strings = isValidArguments(getArguments());
  if (!strings) return;
  return split(strings[0], strings[1]);
}

console.log(getStringSplit());
