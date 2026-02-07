/*  var verticalKeys = Array(5).fill(0).map((_, index) => index)
  verticalKeys[1] = 100
  console.log(verticalKeys)
*/
/*
var j = 3

for (let i = 0; i < 9; i++) {
    const a = i%j;
    const b = i/j>>0;
    const res = a*j + b;
    console.log(" %s -> %s*%s + %s = %s", i, a, j, b, res)
}
    console.log("") */
/*
    var newi = 0;
    for (let colCount = 0; colCount < columns; colCount++) {
      for (let index = colCount; index < preSortedNodes.length; index = index + columns) {
        sortedNodes[index] = preSortedNodes[newi];
        newi++;
      }
    };
*/

const itemCount = 20;
const columns = 3;
const rowCount = Math.ceil(itemCount / columns);

var sortedNodes = Array(itemCount).fill(0).map((_, i) => i);

const renderedNodes = 
    Array(rowCount).fill(null).map((_,i) => 
        Array(columns).fill(null).map((_,j) => sortedNodes[j*rowCount+i]));

console.log(sortedNodes);
console.log(renderedNodes);