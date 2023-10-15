/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/*
 * objects-01.js
 * Language: javascript
 * Test: tests/objects-01.test.js
 * Path: src/objects-01.js
 *
 * Reading and writing from objects
 */

/**
 * Makes a new object with the given properties.
 * name: a string that is the name of the pet,
 * age: a number (as in years) that is the age of the pet,
 * species: a string,
 * hasFur: a boolean,
 * legs: a number,
 * bestFriend: a string
 * @returns {Object} - the object representing the pet
 * must use an object literal to create the object
 * book - https://bit.ly/2YnZJ1Y
 * Mozilla - https://mzl.la/3orRsF9
 * must use a trailing comma in the object
 * Mozilla - https://mzl.la/2Y89AbR
 *
 */
function makePetObject() {
  // write your code here & return value
}

/**
 * Returns a string that is the name of the pet.
 * @param {object} pet - the pet object as defined in makePetObject()
 * @returns {string} - the name of the pet
 * must use dot notation for the property name
 * book - https://bit.ly/3osgWCb
 * Mozilla - https://mzl.la/3iu0uh4
 */
function getPetName(pet) {
  // write your code here & return value
}

/**
 * Returns a number that is the age of the pet.
 * @param {object} pet - the pet object as defined in makePetObject()
 * @returns {number} - the age of the pet
 * must use bracket notation for the property name
 * book - https://bit.ly/2YnZJ1Y
 * Mozilla - https://mzl.la/39ZgjHP
 */
function getPetAge(pet) {
  // eslint-disable-next-line dot-notation
  // write your code here & return value
}

/**
 * Sets the age of the pet to a new value.
 * @param {object} pet - the pet object as defined in makePetObject()
 * @param {number} age - a new age for the pet object
 * @returns {object} - the same pet object but with the new age
 * may use either dot or bracket notation for the property
 *
 * Question: As defined above, this function returns the same pet object,
 * but does it have to? Does the calling function have to use the returned value?
 * Answer: No, the calling function does not have to use the return value
 * because the object is being passed by reference. This function is
 * permanently making a change to the passed object.
 */
function setPetAge(pet, age) {
  // write your code here & return value
}

/**
 * Returns whether the pet's is less than 1
 * @param {object} pet  - the object as defined in makePetObject()
 * @returns {boolean} - true if the pet's age is < 1 , false otherwise
 */
function isPetABaby(pet) {
  // write your code here & return value
}

/**
 * Adds a new property to the pet object.
 * @param {object} pet - the  pet object as defined in makePetObject()
 * @param {string} str- a string indicating the breed of the pet
 * @returns {object} - the same pet object but with a new property
 * breed must be the property name that is added
 */
function addPetBreed(pet, str) {
  // write your code here & return value
}

/**
 * Deletes the bestFriend property from the pet object.
 * @param {object} pet - the object as defined in makePetObject()
 * @returns {object} - the same pet object but with BF deleted
 * book - https://bit.ly/3FfDYCq
 * Mozilla - https://mzl.la/3FmDpqv
 */
function deletePetBestFriend(pet) {
  // write your code here & return value
}

/**
 * Returns an array of all the properties of the pet object.
 * @param {object} pet - the object as defined in makePetObject()
 * @returns {array} - an array of the property names in the object
 * book - https://bit.ly/3uz2fOy
 * Mozilla - https://mzl.la/3ipqBW8
 */
function getPetKeys(pet) {
  // write your code here & return value
}

/**
 * Returns the number of properties in the pet object.
 * @param {object} pet - the object as defined in makePetObject()
 * @returns {number} - the number of properties in the object
 * book - https://bit.ly/3uz2fOy
 */
function getPetObjLength(pet) {
  // write your code here & return value
}

module.exports = {
  makePetObject,
  getPetName,
  getPetAge,
  setPetAge,
  isPetABaby,
  addPetBreed,
  deletePetBestFriend,
  getPetKeys,
  getPetObjLength,
};
