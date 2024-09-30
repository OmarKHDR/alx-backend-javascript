export default function appendToEachArrayValue(array, appendString) {
  newArr = [];
  for (let idx of array) {
    newArr.push(appendString + idx);
  }
  return newArr;
}
