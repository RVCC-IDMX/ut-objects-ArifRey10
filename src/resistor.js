/* eslint-disable brace-style */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable wrap-iife */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* resistor.js */

/*
  Here is a illustration of a 4-banded electronic resistor:
    https://en.wikipedia.org/wiki/File:4-Band_Resistor.svg

  Electronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and determine the resistance
  value in Ohms for any resistor because the color codes are standardized.

  Play with this resistor calculator until you have an idea of how it works. Your
  code will mimic this calculator.
   http://bit.ly/2NjS274
*/

/**
  Here's a Lookup Table for the color codes for the first 2 bands, each color represents
  a digit from 0 to 9.
    const colorCodes = {
     black: 0,
     brown: 1,
     red: 2,
     orange: 3,
     yellow: 4,
     green: 5,
     blue: 6,
     violet: 7,
     grey: 8,
     white: 9,
  };

    Here's a Lookup Table for the Multipliers. Each color represents the multiplication factor
    that is used with the value from the first 2 bands.

    const multiplierCodes = {
     black:          1,
     brown:         10,
     red:          100,
     orange:      1000,
     yellow:     10000,
     green:     100000,
     blue:     1000000,
     violet:  10000000,
     grey:   100000000,
     white: 1000000000,
     gold: 0.1,
     silver: 0.01
  };
 */

/**
 * Returns the digit as a number from the resistor color code
 * @param {string} color - the name of the color
 * @returns {number} - the digit corresponding to the color
 * example: 'black' => 0
 * example: 'red' => 2
 * example: 'violet' => 7
 *
 * must copy the colorCodes object from above
 * and put it inside this function so it is private
 * then use the copied object like a lookup table
 */
function getColorValue(color) {
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  return (function (color) {
    const digit = colorCodes[color.toLowerCase()]; // Convert color to lowercase for case-insensitive matching

    if (digit !== undefined) {
      return digit;
    } else {
      throw new Error('Unknown color: ' + color);
    }
  }(color));
}

/**
 * Returns the number of the multiplier
 * @param {string} color - the color of the multiplier bands
 * @returns {number} - the multiplier number
 * example: 'black' => 1
 * example: 'brown' => 10
 * example: 'red' => 100
 * example: 'orange' => 1000
 *
 * must copy the multiplierCodes object from above
 * and put it inside this function so it is private
 * then use the copied object like a lookup table
 */
function getMultiplierValue(color) {
  const multiplierCodes = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000,
    gold: 0.1,
    silver: 0.01,
  };

  return function (color) {
    const multiplier = multiplierCodes[color.toLowerCase()]; // Convert color to lowercase for case-insensitive matching

    if (multiplier !== undefined) {
      return multiplier;
    } else {
      throw new Error('Unknown color: ' + color);
    }
  }(color);
}

/**
 * Returns the value of the first 3 bands of the resistor colors
 * @param {object} bands - an object with 2 keys
 * @param {string} bands.color1 - the first color
 * @param {string} bands.color2 - the second color
 * @param {string} bands.multiplier - the multiplier color
 * @returns {number} - representing the value of the first 3 bands of the resistor
 *
 * On a 4-band resistor, the first 3 color bands represent a numerical value
 * The first color band is the tens digit, the second is the ones digit
 * The last color band is the multiplier
 *
 * Be careful with the JavaScript floating point rounding problems.
 *
 * If the multiplier is 'gold' make sure the value is rounded down to 1 decimal point.
 * If the multiplier is 'silver' make sure the value is rounded down to 2 decimal points.
 *
 *
 * example: { color1: 'brown', color2: 'red', multiplier: 'black' } => 12
 * example: { color1: 'green', color2: 'brown', multiplier: 'red' } => 5100
 * example: { color1: 'violet', color2: 'orange', multiplier: 'gold' } => 7.3
 *
 */
function getThreeBandValue(bands) {
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const { color1, color2, multiplier } = bands;

  const tensDigit = colorCodes[color1];
  const onesDigit = colorCodes[color2];
  const multiplierValue = getMultiplierValue(multiplier);

  if (tensDigit === undefined || onesDigit === undefined || multiplierValue === undefined) {
    throw new Error('Unknown color in bands.');
  }

  let value = (tensDigit * 10 + onesDigit) * multiplierValue;

  // Handle rounding based on the multiplier
  if (multiplier === 'gold') {
    value = Math.floor(value * 10) / 10;
  } else if (multiplier === 'silver') {
    value = Math.floor(value * 100) / 100;
  }

  return value;
}

/**
   * Returns a string representation of the value with metric notation
   * @param {number} val - number representing the value of the resistor
   * @returns {string} - a string representation of the numeric value with metric notation
   * example: 0.26       => 0.26
   * example: 2.6        => 2.6
   * example: 26         => 26
   * example: 260        => 260
   * example: 2600       => 2.6k  // k = 1 thousand
   * example: 26000      => 26k
   * example: 260000     => 260k
   * example: 2600000    => 2.6M // M = 1 million
   * example: 26000000   => 26M
   * example: 260000000  => 260M
   * example: 2600000000 => 2.6G // G = 1 billion
   *
   *  Hint: I found a solution from stackoverflow
   * Be careful, if you copy older code make sure you replace var with
   * either const or let
   *
   */
function formatNumber(val) {
  const prefixes = ['', 'k', 'M', 'G'];

  let power = 0;
  while (val >= 1000 && power < prefixes.length - 1) {
    val /= 1000;
    power++;
  }
  val = Math.round(val * 10) / 10;

  return val + prefixes[power];
}

/**
   * Returns the tolerance of the resistor according to its color value
   * @param {string} color - the color of the tolerance band to
   * @returns {string} - the tolerance value in percent using the ± symbol
   *
   * Go to http://bit.ly/2NjS274 see what colors are used for the tolerance
   * lookup table.
   *
   * must create a toleranceCodes object inside this function so it is private,
   * then use the object like a lookup table
   *
   * example: 'brown' => '±1%'
   * example: 'red' => '±2%'
   * example: 'green' => '±0.5%'
   */
function getTolerance(color) {
  const toleranceCodes = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  };

  return toleranceCodes[color] || 'Unknown tolerance';
}

/**
   *
   * @param {object} bands - the object with the 4 bands
   * @param {string} bands.color1 - the first color
   * @param {string} bands.color2 - the second color
   * @param {string} bands.multiplier - the multiplier color
   * @param {string} bands.tolerance - the tolerance color
   * @returns {string} - a string representation of the resistor value according to
   * the format in the examples
   *
   * example: {
   *   color1: 'brown',
   *   color2: 'red',
   *   multiplier: 'black',
   *   tolerance: 'brown'
   * }
   *   => '12 Ohms ±1%'
   *
   * example: {
   *   color1: 'green',
   *   color2: 'blue',
   *   multiplier: 'red',
   *   tolerance: 'grey'
   * }
   *   => 'Resistor value: 5.6k Ohms ±0.05%'
   *
   * must use functions in this file to build the string using a template literal
   */
function getResistorOhms(bands) {
  const value = getThreeBandValue(bands);
  const tolerance = getTolerance(bands.tolerance);

  let formattedValue;
  if (value >= 1e9) {
    // Convert to gigohms and format to one decimal place
    const valueInGigaOhms = (value / 1e9).toFixed(1);
    formattedValue = `${valueInGigaOhms.replace('.0', '')}G Ohms`;
  } else if (value >= 1e6) {
    // Convert to megaohms and format to one decimal place
    const valueInMegaOhms = (value / 1e6).toFixed(1);
    formattedValue = `${valueInMegaOhms.replace('.0', '')}M Ohms`;
  } else {
    formattedValue = `${value} Ohms`;
  }

  return `Resistor value: ${formattedValue} ${tolerance}`;
}

module.exports = {
  getColorValue,
  getMultiplierValue,
  getThreeBandValue,
  formatNumber,
  getTolerance,
  getResistorOhms,
};
