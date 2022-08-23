const hipsterCoffee = require('./hipstercoffee.json')[0];

class Till {
  constructor() {
    this.items = [];
    this.total = 0;
    this.shopInfo = hipsterCoffee;
    this.prices = this.shopInfo.prices[0];
    this.test = this.prices['Cafe Latte'];
  }

  getItems() {
    return this.items;
  }

  addItems(...items) {
    for (const item of items) {
      this.items.push(item);
    }
  }
}

module.exports = Till;
