//insert your pseudocode below
/*

*/

//insert your code below
var k;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


k = [Number(window.prompt(0)), Number(window.prompt(0)), Number(window.prompt(0))];
window.alert(k.slice().sort(listsGetSortCompare("NUMERIC", 1)));