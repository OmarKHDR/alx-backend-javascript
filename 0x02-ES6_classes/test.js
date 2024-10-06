import HolbertonCourse from './2-hbtn_course.js';

const c = new HolbertonCourse("php", 13,['feq','few','vwe']);
console.log(c.name ,typeof c.name , c.name === 'php')
console.log(c.length ,typeof c.length , c.length === 13)
console.log(c.students ,typeof c.students , c.students == ['feq','few','vwe'])