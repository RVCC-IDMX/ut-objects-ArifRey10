# JS Unit Testing with Vitest with Coverage and UI

## JS Unit Testing Objects

[![tested with vitest](https://img.shields.io/badge/tested_with-vitest-99424f.svg)](https://vitest.dev/)

*NOTE: There is a browser-based UI for this project. See the [Vitest UI]*


This project is written in [Node](https://nodejs.org/en/), and tested with [Vitest - Blazing Fast Unit Test Framework](https://vitestjs.io/).

---

## The Assignment

When npm runs vitest, all the tests are failing as seen at the end of its output to the console.


<img width="600" alt="all tests fail"  src="https://user-images.githubusercontent.com/13385801/189547187-9a6e14e8-0d1f-45e0-bde7-db0ffee09bff.png">


# Instructions

## Install your dependencies

`npm install`

---

## Run tests on a single file

Start with the first file.

`npm run test:1`

The above npm command is equivalent to the following but is easier to type:

`npx vitest tests/objects-01.test.js --coverage --globals --run --reporter verbose`

as inside the package.json you see it is listed in the scripts:

`"test:1": "vitest tests/objects-01.test.js --coverage --globals --run --reporter verbose"`

Repeat tha process for all of your test files.

**NOTE:** As you are editing, don't forget to save the file before you try running the test or it won't be able to see the changes.

---

So the above example tests the first file `tests/objects-01.test.js` and outputs the results to the console.

If a test fails, vitest will identify it as failing and print one or more error messages, depending on the test expectations.

---

## Edit and test each file sequentially

One-by-one and in order, edit each JavaScript file and follow the instructions for each coding skill. You should run the test after each completed skill and see the pass count increase. When one file passes completely, you are ready for the next file.

Start with objects-01.test.js and finish with objects-04.test

---

## Continue writing and fixing code until all tests pass

When you feel the coding skills are completed, the following command will test all files in the repo that end in test.js

`npm test`

---

## Run tests with a UI

If you want to run the tests with a UI, you can use the following command:

`npm run test:ui`

---

## Measuring Coverage

Coverage reports will be placed in the coverage folder. To view, open index.html using Liver Server.

---


## Completing the Assignment

Commit and push after all tests pass. GitHub will run the same tests and report pass/fail.

---

## Resources

> "Unit testing ensures that all code meets quality standards before it's deployed."
> [The importance of unit testing](https://fortegrp.com/the-importance-of-unit-testing/)