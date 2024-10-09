export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((acc, cur) => acc + cur.id, 0);
}
