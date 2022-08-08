module.exports = function check(str, bracketsConfig) {
  const BRACKETS_PAIR = {
    [')'] : '(',
    ['}'] : '{',
    [']'] : '[',
    ['|'] : '|',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
    ['7'] : '7',
    ['8'] : '8',
  }
  // your solution
  let stack = [];
  for (let i=0; i<str.length; i++) {
    let currentSymbol = str[i]; 
    if (bracketsConfig.includes(currentSymbol) && stack.length === 0) {
      stack.push(currentSymbol); 
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1]; 
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
return stack.length === 0;
}

//check('()', config1), true);