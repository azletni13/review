
function map(array, cb) {
  var newArr = [];

  array.forEach(function(ele) {
    newArr.push(cb(ele));
  })
  return newArr;
}

console.log(map(["ground", "control", "to", "major", "tom"], (elm) => { return elm }));
