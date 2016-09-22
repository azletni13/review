function maxprofit(stockArr) {
  var diffArr = [];

  for(var i = 0; i < stockArr.length; i++) {
    for (var j = i + 1; j < stockArr.length; j++){
      if(stockArr[i] < stockArr[j]) {
        var initialDiff = stockArr[j] - stockArr[i];
        diffArr.push(initialDiff);
      }
    }
  }
  return Math.max.apply(null, diffArr);
};

console.log(maxprofit([1, 5, 3, 8, 2]));

