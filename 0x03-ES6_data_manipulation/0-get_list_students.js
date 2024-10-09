function objFactory(firstName, id, location) {
  return {
    id,
    firstName,
    location,
  };
}

export default function getListStudents() {
  const lst = [];
  lst[0] = objFactory('Guillaume', 1, 'San Francisco');
  lst[1] = objFactory('James', 2, 'Columbia');
  lst[2] = objFactory('Serena', 5, 'San Francisco');
  return lst;
}
