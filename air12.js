const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = (array, low, high) => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, high);
  return i + 1;
};

const quickSort = (array, low, high) => {
  if (low < high) {
    pivot = partition(array, low, high);

    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
  return array.join(" ");
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
