
//!  Conditional Odd Series..................

function conditionalOddSeries(a) {
  const result = [];
  let limit = a % 2 === 0 ? a - 1 : a;
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(conditionalOddSeries(6)); 
