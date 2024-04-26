import checkMoon from '../js/checkmoon';

test('Тест проверки по алгоритму Луна - false', () => {
  const arrValue = [...'5062821734567892'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkMoon(arrValue);
  expect(result).toEqual(false);
});

test('Тест проверки по алгоритму Луна - true', () => {
  const arrValue = [...'4726862788017000'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkMoon(arrValue);
  expect(result).toEqual(true);
});
