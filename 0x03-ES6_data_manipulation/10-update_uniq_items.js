export default function updateUniqueItems(map) {
  const key = map.keys();
  for (const ele of key) {
    if (map.get(ele) === 1) {
      map.set(ele, 100);
    }
  }
  return map;
}
