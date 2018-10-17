const generateFibo = function(limit) {
  let series = [];
  let tempArray = [-1,1];
  for(let index = 0; index < limit; index ++) {
    tempArray[index] = tempArray[tempArray.length-2] + tempArray[tempArray.length-1];
    series[index] = tempArray[index];
  }
  return series;
}

const reverseFibo = function(limit) {
  let fiboSeries = generateFibo(limit);
  let reverseSeries = [];
  let reverseIndex = 0;
  for(let index = fiboSeries.length-1; index >= 0; index --) {
    reverseSeries[reverseIndex] = fiboSeries[index];
    reverseIndex ++;
  }
  return reverseSeries;
}

exports.reverseFibo = reverseFibo;
