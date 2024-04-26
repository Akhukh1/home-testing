export default function checkMoon(arrValue) {
  let sum = 0;
  const parity = (arrValue.length) % 2;

  for (let i = 0; i < arrValue.length; i += 1) {
    let digit = Number(arrValue[i]);

    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  if (sum % 10 === 0) {
    return true;
  }
  return false;
}
