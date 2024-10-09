export default function createInt8TypedArray(len, pos, val) {
  if (pos - 1 <= len) {
    const bytes = DataView(new ArrayBuffer(len), 0, len);
    bytes.setInt8(pos, val);
    return bytes;
  }
  throw new Error('Position outside range');
}
