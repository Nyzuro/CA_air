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
