export default function checkReleaseCard(arrValue) {
  if (arrValue[0] == 4) {
    return 'Ваша карта VISA';
  } if (arrValue[0] == 2) {
    return 'Ваша карта MIR';
  } if (arrValue[0] == 5) {
    return 'Ваша карта MASTERCARD';
  } if ((arrValue[0] == 3) && (arrValue[1] == 5)) {
    return 'Ваша карта JSB';
  } if ((arrValue[0] == 6) && (arrValue[1] == 0)) {
    return 'Ваша карта Discover';
  } if ((arrValue[0] == 3) && ((arrValue[1] == 0) || (arrValue[1] == 6))) {
    return 'Ваша карта Diners Club';
  } if ((arrValue[0] == 3) && ((arrValue[1] == 4) || (arrValue[1] == 7))) {
    return 'Ваша карта AMEX';
  }
  return 'Карта не определена';
}
