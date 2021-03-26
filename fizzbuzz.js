function fizzbuzz(num) {
  const isDivisible = ({num, by} = {}) => num % by === 0

  if (num === 0) return 0;
  if (isDivisible({num, by: 3}) && isDivisible({num, by: 5})) return "fizzbuzz";
  if (isDivisible({num, by: 3})) return "fizz";
  if (isDivisible({num, by: 5})) return "buzz";
  return num;
}

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print(16);

module.exports = fizzbuzz;
