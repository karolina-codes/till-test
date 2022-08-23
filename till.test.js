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
    const till = new Till();

    it('adds 3 items to the list', () => {
      till.addItems('Affogato', 'Tiramisu', 'Cappucino');
      expect(till.getItems()).toEqual({
        Affogato: [1, 14.8],
        Cappucino: [1, 3.85],
        Tiramisu: [1, 11.4],
      });
    });
  });
});
