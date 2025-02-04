const fs = require("fs");

const readFile = (fileName) => {
  const contents = fs.readFileSync(fileName, "utf8");
  return contents;
};

const isValidArguments = (arguments) => {
  if (arguments.length != 1) {
    console.error("Entrez 1 argument");
    return;
  }
  return arguments;
};

const isValidFile = (fileName) => {
  if (!fs.existsSync(fileName)) {
    console.error("Fichier non trouve");
    return;
  }
  return fileName;
};

const getArguments = () => {
  const arguments = process.argv.slice(2);
  return arguments;
};

const getContentFile = () => {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const fileName = isValidFile(arguments[0]);
  if (!fileName) return;
  return readFile(fileName);
};

console.log(getContentFile());
