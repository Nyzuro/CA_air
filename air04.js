function removeDuplicates(string) {
  let finalString = "";
  for (let i = 0; string[i]; i++) {
    if (string[i] !== string[i - 1]) {
      finalString += string[i];
    }
  }
  return finalString;
}

function isValidArguments(arguments) {
  if (arguments.length !== 1) {
    console.error("N'entrez qu'une chaine de caractere");
    return;
  }
  return arguments;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getStringWithoutDuplicates() {
  const string = isValidArguments(getArguments());
  if (!string) return;
  return removeDuplicates(string[0]);
}

console.log(getStringWithoutDuplicates());
