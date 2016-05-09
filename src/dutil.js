'use strict';

/* Data Util ******************************************************************/

/* Like underscores _.map but with a filter function to reduce results */
function filterMap(list, filter, iteratee){
  var l = list.length;
  var i = 0;
  var r = [];
  for(i;i<l;i++) if(filter(list[i], i)) r.push(iteratee(list[i], i));
  return r;
}

module.exports = {
  filterMap: filterMap,
}
