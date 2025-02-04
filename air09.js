const arrayRotate = (array) => {
  const rotatedArray = [];
  const firstElement = array.shift();
  rotatedArray.push(...array, firstElement);
  return rotatedArray;
};

const isValidArguments = (arguments) => {
  if (arguments.length < 1) {
    console.error("Le nombre d'arguments est trop faible");
    return;
  }
  return arguments;
};

const getArguments = () => {
  const arguments = process.argv.slice(2);
  return arguments;
};

function getRotatedArray() {
  const array = isValidArguments(getArguments());
  if (!array) return;
  return arrayRotate(array);
}

console.log(getRotatedArray);
