export default function getStudentsByLocation(std, city) {
  return std.filter((obj) => obj.location === city);
}
