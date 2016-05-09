'use strict';

/* Vector Utils ***************************************************************/

/* Returns the 1d index from 2d coordinates */
function getIndexFromCoords(x, y, width, channels){
  channels = channels || 1;
  x *= channels;
  y *= channels;
  return x + (y * width);
}

/* Returns the 2d coords from a 1d index */
function getCoordsFromIndex(i, width, channels){
  channels = channels || 1;
  i /= channels
  return {x:i%width, y:Math.floor(i/width)};
}

/* Scale Vector by division */
function makeRelative(vec, size){
  return {x:vec.x/size.x, y:vec.y/size.y}
}

/* Scale Vector by multiplication */
function makeAbsolute(vec, size){
  return {x:vec.x*size.x, y:vec.y*size.y}
}

module.exports = {
  getIndexFromCoords: getIndexFromCoords,
  getCoordsFromIndex: getCoordsFromIndex,
  makeRelative: makeRelative,
  makeAbsolute: makeAbsolute
}
