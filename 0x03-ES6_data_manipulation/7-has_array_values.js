export default function hasValuesFromArray(set, arr) {
  let returnVal = true;
  arr.forEach((element) => {
    if (!set.has(element)) {
      returnVal = false;
    }
  });
  return returnVal;
}
