import isValidInn from '../js/validators';

test('Тест проверки ввода, только цифры, количество более или равно 13 - true', () => {
  const result = isValidInn('111111111111111');
  expect(result).toEqual(true);
});

test('Тест проверки ввода, только цифры, количество меньше 13 - false', () => {
  const result = isValidInn('111111111111');
  expect(result).toEqual(false);
});

test('Тест проверки ввода, не только цифры - false', () => {
  const result = isValidInn('111_11_22222ggg3333');
  expect(result).toEqual(false);
});
