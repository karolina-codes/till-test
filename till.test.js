const Till = require('./till');

describe('Till', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-08-07'));
  });

  describe('empty till', () => {
    const till = new Till();

    it('returns items in till', () => {
      expect(till.getItems()).toEqual([]);
    });

    it('adds an item to the list', () => {
      till.addItem('Flat White');

      expect(till.items).toEqual(['Flat White']);
    });
  });
});
