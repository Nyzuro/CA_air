function findIntruders(list) {
  const intruders = [];

  for (const index of list) {
    let countPair = 0;
    for (const char of list) {
      if (index === char) {
        countPair++;
      }
    }
    if (countPair === 1) {
      intruders.push(index);
    }
  }
  return intruders.join(" ");
}

function isValidArguments(arguments) {
  if (arguments.length < 1) {
    console.error("Entrez un argument");
    return;
  }
  return arguments;
}

function getArguments() {
  const arguments = process.argv.slice(2);
  return arguments;
}

function getIntruder() {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const intruders = findIntruders(arguments);
  if (!intruders) {
    console.error("Aucun intrus n'a ete trouve");
    return;
  }
  return intruders;
}

console.log(getIntruder());
