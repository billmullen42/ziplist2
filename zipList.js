const testA = ['a', 'b', 'c'];
const testB = [1,2,3];

function zipList( ar1, ar2){
  let newArray = [];
  for (let i = 0; i <ar1.length; i++){
    newArray.push(ar1[i], ar2[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(ar1, ar2){
  let newArray = _.flatten(_.zip(ar1, ar2));
  return newArray;
}
console.log(zipList (testA, testB));
console.log(zipListTheSimpleWay (testA, testB));
