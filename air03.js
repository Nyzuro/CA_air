function findIntruders(list) {
  const intruders = [];
  for (let i = 0; i < list.length; i++) {
    let countPair = 0;
    for (let j = 0; j < list.length; j++) {
      if (list[i] === list[j]) {
        countPair++;
      }
    }
    if (countPair === 1) {
      intruders.push(list[i]);
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
