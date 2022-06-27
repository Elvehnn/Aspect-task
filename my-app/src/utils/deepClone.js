export const deepClone = (array) => {
  const clone = [];

  for (const i in array) {
    if (array[i] instanceof Object) {
      clone[i] = deepClone(array[i]);
    } else {
      clone[i] = array[i];
    }
  }
  return clone;
};
