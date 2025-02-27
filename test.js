function sortedInsert(numbers, newElement) {
  for (let i = 0; i < numbers.length; i++) {
    if (newElement >= numbers[i] && newElement <= numbers[i + 1]) {
      numbers.splice(i + 1, 0, newElement);
      return numbers;
    } else if (newElement <= numbers[i]) {
      numbers.splice(i, 0, newElement);
      return numbers;
    } else if (newElement >= numbers[i] && numbers[i + 1] === undefined) {
      numbers.splice(i + 1, 0, newElement);
      return numbers;
    }
  }
}

console.log(sortedInsert([10, 20, 30, 40], 40));
