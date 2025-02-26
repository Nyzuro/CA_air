function split(stringToCut, stringSeparator) {
  let string = "";
  const stringSplited = [];

  for (let i = 0; i < stringToCut.length; i++) {
    let isSeparator = false;
    if (stringToCut[i] === stringSeparator[0]) {
      let compare = i;
      for (let j = 0; stringToCut[compare] === stringSeparator[j]; j++) {
        if (j === stringSeparator.length - 1) {
          stringSplited.push(string);
          string = "";
          i += stringSeparator.length - 1;
          isSeparator = true;
          break;
        }
        compare++;
      }
    }
    if (!isSeparator) string += stringToCut[i];
  }
  stringSplited.push(string);
  return stringSplited;
}

function isValidArguments(arguments) {
  if (arguments.length !== 2) {
    console.error("Entrez une chaine de caractere et un separateur seulement");
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

function getStringSplit() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const strings = isValidStrings(arguments);
  if (!strings) return;
  return split(strings[0], strings[1]);
}

console.log(getStringSplit());
