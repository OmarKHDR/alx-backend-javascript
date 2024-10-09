export default function updateStudentGradeByCity(student, city, grade) {
  const notDefGrade = { grade: 'N/A' };
  const filteredList = student.filter((obj) => obj.location === city);
  const mapped = filteredList.map((ele) => {
    const grd = ele;
    const grdele = grade.filter((obj) => obj.studentId === ele.id)[0] || notDefGrade;
    grd.grade = grdele.grade;
    return grd;
  });
  return mapped;
}
