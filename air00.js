function split(stringToCut, stringSeparators) {
  const strSplit = [];
  let string = "";
  for (let i = 0; i < stringToCut.length; i++) {
    let isSeparator = false;
    for (const separator of stringSeparators) {
      if (stringToCut[i] === separator) {
        isSeparator = true;
        if (string) {
          strSplit.push(string);
          string = "";
        }
      }
    }
    if (isSeparator === false) {
      string += stringToCut[i];
    }
  }
  strSplit.push(string);
  return strSplit;
}

function isValidArguments(arguments) {
  if (arguments.length !== 1) {
    console.error("Il faut 1 argument");
    return;
  }
  for (const argument of arguments) {
    if (!isNaN(argument)) {
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
  const separators = [" ", "\n", "\t"];
  return split(strings[0], separators);
}

console.log(getStringSplit());
