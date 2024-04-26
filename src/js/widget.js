import isValidInn from './validators';
import checkMoon from './checkmoon';
import checkReleaseCard from './checkreleasecard';

export default class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return '<form class="check-card"><input class="input-card" placeholder="Credit card number"><button class="btn">Validate</button></form>';
  }

  bindToDom() {
    this.parentEl.innerHTML = InnFormWidget.markup;

    this.element = this.parentEl.querySelector('.check-card');
    this.input = this.element.querySelector('.input-card');
    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.input;
    if (isValidInn(value)) {
      const arrValue = [...value];
      this.checkCard(arrValue);
    } else {
      this.renderingResultCheck('Номер карты должен содержать 13 или более цифр');
    }
  }

  checkCard(arrValue) {
    if (checkMoon(arrValue)) {
      const textCheck = checkReleaseCard(arrValue);
      this.renderingResultCheck(textCheck);
    } else {
      this.renderingResultCheck('Номер карты введен не правильно.');
    }
  }

  renderingResultCheck(textCheck) {
    document.querySelector('.result-check').textContent = textCheck;
  }
}
