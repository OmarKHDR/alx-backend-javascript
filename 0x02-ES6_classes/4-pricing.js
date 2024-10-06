import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(cur) {
    if (cur instanceof Currency) {
      this._currency = cur;
    } else {
      throw new TypeError('currency must be a currency object');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(am) {
    if (typeof am !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = am;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
}
