function calculate(sentence) {
  
  if (typeof sentence !== 'string') return '';
  
  const [leftNumber, operator, rightNumber] = sentence.split(' ');
  
    if (operator === '+') {
      return '.'.repeat(leftNumber.length + rightNumber.length);
    }
  
    if (operator === '-') {
      return '.'.repeat(leftNumber.length - rightNumber.length);
    }
  
    if (operator === '*') {
      return '.'.repeat(leftNumber.length * rightNumber.length);
    }
  
    if (operator === '//') {
      return '.'.repeat(leftNumber.length / rightNumber.length);
    }
   }
   
   console.log(calculate("..... - ...")); // ..
