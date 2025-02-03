function stringCompare(string, stringToFind) {
  for (let i = 0; i <= string.length; i++) {
    let j = 0;
    while (string[i] === stringToFind[j]) {
      i++;
      j++;
      if (j === stringToFind.length) return true;
    }
    if (j !== 0) {
      i--;
    }
  }
  return false;
}

function findInString(arrayOfStrings, stringToFind) {
  let finalArray = arrayOfStrings.filter(
    (string) => !stringCompare(string, stringToFind)
  );
  return finalArray;
}

const arguments = process.argv.slice(2);
const stringToFind = arguments.pop();
console.log(findInString(arguments, stringToFind));
