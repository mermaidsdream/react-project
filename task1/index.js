function calculate(str) {
  let result;
  let [leftNumber, operator, rightNumber] = str.split(' ');

  if (operator === '+') {
    return result = '.'.repeat(leftNumber.length + rightNumber.length);
  }

  if (operator === '-') {
    return result = '.'.repeat(leftNumber.length - rightNumber.length);
  }

  if (operator === '*') {
    return result = '.'.repeat(leftNumber.length * rightNumber.length);
  }

  if (operator === '//') {
    return result = '.'.repeat(leftNumber.length / rightNumber.length);
  }
}

console.log(calculate("..... - ..."));
