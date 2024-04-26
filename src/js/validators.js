export default function isValidInn(value) {
  if ((value.length > 12) && /^\d+$/.test(value)) {
    return true;
  }
  return false;
}
