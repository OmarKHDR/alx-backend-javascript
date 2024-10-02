export default function createIteratorObject(report) {
  const lst = [];
  for (const i of Object.values(report["allEmployees"])) {
    lst.push(...i);
  }
  return lst;
}
