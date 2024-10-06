import ClassRoom from './0-classroom';

// 19 20 34
export default function initializeRooms() {
  const ls = [];
  ls[0] = new ClassRoom(19);
  ls[1] = new ClassRoom(20);
  ls[2] = new ClassRoom(34);
  return ls;
}
