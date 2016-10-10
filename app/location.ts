export class Location {
  id: number;
  currency: string;
  name: string;

  private CURRENCY_SYMBOLS: Object = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
  }

  constructor(id: number, currency: string, name: string) {
    this.id = id;
    this.currency = currency;
    this.name = name;
  }

  getCurrencySymbol(): string {
    return this.CURRENCY_SYMBOLS[this.currency];
  }
}