/* eslint-disable no-undef */
const {
  makePetObject,
  getPetName,
  getPetAge,
  setPetAge,
  isPetABaby,
  addPetBreed,
  deletePetBestFriend,
  getPetKeys,
  getPetObjLength,
} = require('../src/objects-01');

test('makePetObject', () => {
  const aPet = makePetObject();
  expect(typeof aPet).toBe('object');
  expect(typeof aPet.name).toBe('string');
  expect(typeof aPet.age).toBe('number');
  expect(typeof aPet.species).toBe('string');
  expect(typeof aPet.legs).toBe('number');
  expect(typeof aPet.hasFur).toBe('boolean');
  expect(typeof aPet.bestFriend).toBe('string');
});

test('getPetName', () => {
  const aPet = makePetObject();
  expect(getPetName(aPet)).toBe(aPet.name);
});

test('getPetAge', () => {
  const aPet = makePetObject();
  expect(getPetAge(aPet)).toBe(aPet.age);
});

test('setPetAge', () => {
  const aPet = makePetObject();
  setPetAge(aPet, 5);
  expect(aPet.age).toBe(5);
});

test('isPetABaby', () => {
  const aPet = makePetObject();
  setPetAge(aPet, 5);
  expect(isPetABaby(aPet)).toBe(false);
  setPetAge(aPet, 0.5);
  expect(isPetABaby(aPet)).toBe(true);
});

test('addPetBreed', () => {
  const aPet = makePetObject();
  addPetBreed(aPet, 'German Shepherd');
  expect(aPet.breed).toContain('German Shepherd');
});

test('deletePetBestFriend', () => {
  // setup
  const aPet = makePetObject();
  const numberKeys = Object.keys(aPet).length;
  // execute
  const obj = deletePetBestFriend(aPet);
  // verify
  expect(typeof obj).toBe('object');
  expect(Object.keys(obj)).toHaveLength(numberKeys - 1);
  expect(aPet.bestFriend).toBe(undefined);
});

test('getPetKeys', () => {
  const aPet = makePetObject();
  const keys = getPetKeys(aPet);
  expect(keys).toContain('name');
  expect(keys).toContain('age');
  expect(keys).toContain('species');
  expect(keys).toContain('legs');
  expect(keys).toContain('hasFur');
  expect(keys).toContain('bestFriend');
});

test('getPetObjLength', () => {
  const aPet = makePetObject();
  const length = getPetObjLength(aPet);
  expect(length).toBe(6);
});
