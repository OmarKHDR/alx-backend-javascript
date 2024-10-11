export default function updateUniqueItems(map) {
  try {
    const key = map.keys();
    for (const ele of key) {
      if (map.get(ele) === 1) {
        map.set(ele, 100);
      }
    }
  } catch (err) {
    throw new Error('Cannot process');
  }
  return map;
}
