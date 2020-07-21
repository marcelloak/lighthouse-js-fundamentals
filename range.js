function range(start, end, step) {
  var range = [];
  if (start === undefined || end === undefined || step === undefined) return range;
  if (start > end) return range;
  if (step <= 0) return range;
  for(var i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));