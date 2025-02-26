function concat(strings, separator) {
  let finalString = "";
  for (let i = 0; i < strings.length; i++) {
    finalString += strings[i];
    if (strings[i + 1]) {
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

function getStringConcat() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const strings = isValidStrings(arguments);
  if (!strings) return;

  const separator = strings.pop();
  return concat(strings, separator);
}

console.log(getStringConcat());
