export default function cleanSet(set, str) {
  if (str === '') {
    return '';
  }
  const retVal = [];
  const len = str.length;
  for (const ele of set) {
    if (ele.slice(0, len) === str) {
      retVal.push(ele.slice(len));
    }
  }
  return retVal.join('-');
}
