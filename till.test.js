const Till = require('./till');

describe('Till', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-08-07'));
  });

  describe('empty till', () => {
    const till = new Till();

    it('returns items in till', () => {
      expect(till.getItems()).toEqual({});
    });

    it('adds an item to the list', () => {
      till.addItems('Flat White');

      expect(till.items).toEqual({ 'Flat White': [1, 4.75] });
    });
  });

  describe('adds multiple items to the till in one go', () => {
    it('adds 3 items to the list', () => {
      const till = new Till();
      till.addItems('Affogato', 'Tiramisu', 'Cappucino');

      expect(till.getItems()).toEqual({
        Affogato: [1, 14.8],
        Cappucino: [1, 3.85],
        Tiramisu: [1, 11.4],
      });
    });

    it('adds 2 of the same item to the list', () => {
      const till = new Till();

      till.addItems('Affogato', 'Affogato');

      expect(till.getItems()).toEqual({
        Affogato: [2, 14.8],
      });
    });
  });

  it('returns the total price for all items', () => {
    const till = new Till();
    till.addItems('Affogato', 'Cappucino', 'Affogato');

    expect(till.totalPrice()).toEqual(33.45);
  });
});
