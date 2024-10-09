export default function hasValuesFromArray(set, arr) {
  return set.isSubsetOf(new Set(arr));
}
