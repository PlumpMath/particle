'use strict';

/* Math Util ******************************************************************/

// Basic Constants
const DEG2RAD = Math.PI / 180;
const RAD2DEG = Math.PI * 180;
const PI2 = Math.PI * 2;

/* Returns a pseudo random Floating Point Number of given magnitude */
function randomFloat(a, b){
  if(typeof a !== "number") a = 0;
  if(typeof b !== "number") b = 1;
  if(a > b) b ^= (a ^ (a=b)); // swap if a is less than b
  return a + Math.random()*(b-a);
}

/* Returns a pseudo random Integer of given magnitude */
function randomInt(a, b){
  return Math.round(randomFloat(a, b));
}

/* Clamps the given value at min max */
function clamp(value, min, max){
  return Math.max(min, Math.min(max, value));
}

/* Wraps the given value around min max */
function wrap(value, min, max){
  return ((value-min) % (max - min) ) + min;
}

module.exports = {
  DEG2RAD: DEG2RAD,
  RAD2DEG: RAD2DEG,
  PI2: PI2,
  randomFloat: randomFloat,
  randomInt: randomInt,
  clamp: clamp,
  wrap: wrap
}
