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

console.log(stringCompare("joi23jd", "23"));
