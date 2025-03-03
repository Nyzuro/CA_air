const pyramid = (char, floor) => {
  for (let i = 1; i <= floor; i++) {
    let line = "";
    for (let j = 1; j <= floor - i; j++) {
      line += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      line += char;
    }

    console.log(line);
  }
};

const isValidArguments = (arguments) => {
  if (arguments.length !== 2) {
    console.error("Entrez 2 arguments");
    return;
  }
  return arguments;
};

const isValidNumber = (number) => {
  if (isNaN(number)) {
    console.error("Entrez un nombre en tant que ligne en 2eme argument");
    return;
  }
  return Number(number);
};

const isValidChar = (char) => {
  if (!isNaN(char)) {
    console.error("Entrez un caractere a afficher en 1er argument");
    return;
  }
  return char;
};

const getArguments = () => {
  const arguments = process.argv.slice(2);
  return arguments;
};

const getPyramid = () => {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const numbersOfLines = isValidNumber(arguments[1]);
  if (!numbersOfLines) return;
  const char = isValidChar(arguments[0]);
  if (!char) return;
  return pyramid(char, numbersOfLines);
};

getPyramid();
