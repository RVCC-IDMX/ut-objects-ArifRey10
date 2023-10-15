/* eslint-disable no-undef */
const { getVolumeOfBox } = require('../src/objects-03');

test('getVolumeOfBox', () => {
  expect(getVolumeOfBox({ width: 2, length: 5, height: 1 })).toBe(10);
  expect(getVolumeOfBox({ width: 3, length: 3, height: 3 })).toBe(27);
  expect(getVolumeOfBox({ length: 2.4, width: 3, height: 1.8 })).toBe(12.96);
});
