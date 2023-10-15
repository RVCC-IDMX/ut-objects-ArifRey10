/* eslint-disable no-unused-vars */
/*
 * objects-04.js
 * Language: javascript
 * Test: tests/objects-04.test.js
 * Path: src/objects-04.js
 *
 * Complex objects and serialization
 */

/*
? below is a sample response object from the site
? https://restfulapi.net/introduction-to-json/

? study the below object that is called response
? its first property is called employees and it is an array of objects
? how many elements are in that array? The answer is 3
? if you were asked to extract one property from each object
? to create a new array, what would you do?
? The answer is to use the map() array method

? the map() method takes a function as an argument
? the function can be called with two arguments
? the first argument is the current element in the array
? the second argument is the index of the current element

! Hint: try to think through the next 2 functions yourself, then look
! at my answer at https://codepen.io/cynthiateeters/pen/xxreeBN

! a solution different from mine that passes the test is a good
! solution

*/
// eslint-disable-next-line no-unused-vars
const response = {
  employees: [
    {
      id: 1,
      name: 'Admin',
      location: 'France',
    },
    {
      id: 2,
      name: 'Author',
      location: 'United States',
    },
    {
      id: 3,
      name: 'Visitor',
      location: 'United Kingdom',
    },
  ],
};

/**
 * Returns a single name of an employee from the response object
 * @const {object} response - the above object
 * @param {number} index - index of the employees array
 * @return {string} - the name of the employee
 * example: getEmployeeName(1) // => 'Author'
 */
function getOneEmployeeName(index) {
  // write your code here & return value
}

/**
 * Returns a list (array) of employees from the response object
 * @const {object} response - the above object
 * @return {array} - an array of objects with these given properties
 *
 * without hard-coding the return values, create an array
 * with a list of employee names from the response object
 * that is defined above this function
 * example: getEmployeeNames() // => ['Admin', 'Author', 'Visitor']
 * must use the map() array method
 */
function getEmployeeNames() {
  // write your code here & return value
}

module.exports = {
  getOneEmployeeName,
  getEmployeeNames,
};
