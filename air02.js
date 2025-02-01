function concat(arrayOfStrings, separator) {
  let finalString = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    finalString += arrayOfStrings[i];
    if (arrayOfStrings[i + 1]) {
      finalString += separator;
    }
  }
  return finalString;
}

function isValidArguments(arguments) {
  if (arguments.length < 3) {
    console.error(
      "Veuillez entrer au moins 2 chaines de caracteres et 1 separateur"
    );
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

function getStringConcat() {
  const strings = isValidArguments(getArguments());
  if (!strings) return;
  const separator = strings.pop();
  const arrayOfStrings = strings;
  return concat(arrayOfStrings, separator);
}

console.log(getStringConcat());
