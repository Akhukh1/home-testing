/**
 * @jest-environment jsdom
 */

import InnFormWidget from '../js/widget';

test('Тест отрисовки виджета', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDom();

  expect(container.innerHTML).toEqual(InnFormWidget.markup);
});

test('Тест отрисовки резудьтата "Ваша карта VISA"', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDom();

  const form = document.querySelector('.check-card');
  document.body.innerHTML = '<div class="result-check"></div>';

  widget.input.value = '4024007117978477';
  form.submit();

  const result = document.querySelector('.result-check');

  expect(result.textContent).toEqual('Ваша карта VISA');
});

test('Тест отрисовки резудьтата "Номер карты должен содержать 13 или более цифр"', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDom();

  const form = document.querySelector('.check-card');
  document.body.innerHTML = '<div class="result-check"></div>';

  widget.input.value = '402400';
  form.submit();

  const result = document.querySelector('.result-check');

  expect(result.textContent).toEqual('Номер карты должен содержать 13 или более цифр');
});

test('Тест отрисовки резудьтата "Номер карты введен не правильно."', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnFormWidget(container);

  widget.bindToDom();

  const form = document.querySelector('.check-card');
  document.body.innerHTML = '<div class="result-check"></div>';

  widget.input.value = '5062821734567892';
  form.submit();

  const result = document.querySelector('.result-check');

  expect(result.textContent).toEqual('Номер карты введен не правильно.');
});
