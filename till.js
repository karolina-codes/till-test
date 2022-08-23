const hipsterCoffee = require('./hipstercoffee.json')[0];

class Till {
  constructor() {
    this.items = {};
    this.total = 0;
    this.shopInfo = hipsterCoffee;
    this.prices = this.shopInfo.prices[0];
  }

  getItems() {
    return this.items;
  }

  addItems(...items) {
    for (const item of items) {
      if (this.items.hasOwnProperty(item)) {
        this.items[item][0] += 1;
      } else {
        this.items[item] = [1, this.prices[item]];
      }
    }
  }
}

module.exports = Till;
