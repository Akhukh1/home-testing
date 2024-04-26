import checkReleaseCard from '../js/checkreleasecard';

test('Тест определения типа карты VISA', () => {
  const arrValue = [...'4024007117978477'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта VISA');
});

test('Тест определения типа карты MIR', () => {
  const arrValue = [...'2201382000000013'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта MIR');
});

test('Тест определения типа карты MASTERCARD', () => {
  const arrValue = [...'5410843252494998'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта MASTERCARD');
});

test('Тест определения типа карты JSB', () => {
  const arrValue = [...'3530460099144262'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта JSB');
});

test('Тест определения типа карты Discover', () => {
  const arrValue = [...'6011977509831437'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта Discover');
});

test('Тест определения типа карты Diners Club начинаются с 30', () => {
  const arrValue = [...'30456350509905'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта Diners Club');
});

test('Тест определения типа карты Diners Club начинаются с 36', () => {
  const arrValue = [...'36424590231411'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта Diners Club');
});

test('Тест определения типа карты AMEX начинаются с 34', () => {
  const arrValue = [...'341338282850405'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта AMEX');
});

test('Тест определения типа карты AMEX начинаются с 37', () => {
  const arrValue = [...'375027651706483'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Ваша карта AMEX');
});

test('Тест определения типа карты "Карта не определена"', () => {
  const arrValue = [...'11111111111111111111'];
  for (let i = 0; i < arrValue.length; i += 1) {
    arrValue[i] = parseInt(arrValue[i]);
  }
  const result = checkReleaseCard(arrValue);
  expect(result).toEqual('Карта не определена');
});
