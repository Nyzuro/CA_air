function split(stringToSplit, separators) {
  const stringSplited = [];
  let string = "";
  for (const char of stringToSplit) {
    if (separators.includes(char)) {
      if (string) {
        stringSplited.push(string);
        string = "";
      }
    } else string += char;
  }
  if (string) stringSplited.push(string);
  return stringSplited;
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

function getSeparators() {
  return [" ", "\n", "\t"];
}

function getStringSplit() {
  const strings = isValidArguments(getArguments());
  if (!strings) return;

  const string = strings[0];
  const separators = getSeparators();

  return split(string, separators);
}

console.log(getStringSplit());
