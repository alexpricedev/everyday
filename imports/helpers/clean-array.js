/**
 * cleanArray removes any empty (and falsy) values.
 * @param {Array} array - The array to clean
 * @return {Array} _ - The cleaned array
 */
const cleanArray = (array) => {
  return array.filter((_, i) => array[i]);
};

export { cleanArray };
