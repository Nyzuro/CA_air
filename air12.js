const swap = (numbers, i, j) => {
  const temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = temp;
};

const partition = (numbers, low, high) => {
  const pivot = numbers[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (numbers[j] < pivot) {
      i++;
      swap(numbers, i, j);
    }
  }

  swap(numbers, i + 1, high);
  return i + 1;
};

const quickSort = (numbers, low, high) => {
  if (low < high) {
    pivot = partition(numbers, low, high);

    quickSort(numbers, low, pivot - 1);
    quickSort(numbers, pivot + 1, high);
  }
  return numbers.join(" ");
};

const isValidArguments = (arguments) => {
  if (arguments.length < 1) {
    console.error("Le programme a besoin d'un argument pour fonctionner");
    return;
  }
  return arguments;
};

const isValidNumber = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      console.error("N'entrez que des nombres");
      return;
    }
    numbers[i] = Number(numbers[i]);
  }
  return numbers;
};

const getArguments = () => {
  const arguments = process.argv.slice(2);
  return arguments;
};

const getArraySorted = () => {
  const arguments = isValidArguments(getArguments());
  if (!arguments) return;
  const numbers = isValidNumber(arguments);
  if (!numbers) return;
  return quickSort(numbers, 0, numbers.length - 1);
};

console.log(getArraySorted());
