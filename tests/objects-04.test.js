/* eslint-disable no-undef */
const { getOneEmployeeName, getEmployeeNames } = require('../src/objects-04');

test('getOneEmployeeName', () => {
  expect(getOneEmployeeName(0)).toBe('Admin');
  expect(getOneEmployeeName(1)).toBe('Author');
  expect(getOneEmployeeName(2)).toBe('Visitor');
});

test('getEmployeeNames', () => {
  expect(getEmployeeNames()).toEqual(['Admin', 'Author', 'Visitor']);
});
