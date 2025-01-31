function split(stringToCut, stringSeparator) {
  let string = "";
  const stringSplited = [];
  for (let index = 0; index < stringToCut.length; index++) {
    if (stringToCut[index] !== stringSeparator[0]) {
      string += stringToCut[index];
    } else {
      let i = 0;
      let j = index;
      while (stringToCut[j] === stringSeparator[i]) {
        i++;
        j++;
      }
      if (i === stringSeparator.length && string) {
        stringSplited.push(string);
        string = "";
        index = j - 1;
      } else {
        string += stringToCut[index];
      }
    }
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
  return split(strings[0], strings[1]);
}

console.log(getStringSplit());
