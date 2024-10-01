export default function createIteratorObject(report) {
  const lst = [];
  for (const i of Object.values(report)) {
    lst.push(...i);
  }
  return lst;
}
