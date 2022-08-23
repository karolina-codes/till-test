const Till = require('./till');

describe('Till', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-08-07'));
  });

  it('adds an item to the list', () => {
    const till = new Till();
    till.addItem('Flat White');

    expect(till.items).toEqual(['Flat White']);
  });
});
