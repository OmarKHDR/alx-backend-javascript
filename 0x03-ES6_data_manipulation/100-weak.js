export const weakMap = new WeakMap();
export function queryAPI(query) {
  weakMap.set(query, (weakMap.get(query) || 0) + 1);
  if (weakMap.get(query) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
