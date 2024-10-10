export default function cleanSet(set, str) {
  if (str === '') {
    return '';
  }
  const retVal = [];
  const len = str.length;
  for (let ele of set) {
    if (ele.slice(0, len) === str) {
      retVal.push(ele.slice(len));
    }
  }
  return retVal.join('-');
}


console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
