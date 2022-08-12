module.exports = function check(str, bracketsConfig) {
  let BRACKETS_PAIR = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
        BRACKETS_PAIR.push(bracketsConfig[i][1])
  } 
    let stack = [];
    for (let i=0; i<str.length; i++) {
      let currentSymbol = str[i];
      if (stack.length === 0 ) {
      stack.push(currentSymbol); 
      console.log(stack); 
      } else {
        let topElement = stack[stack.length - 1];
              if (BRACKETS_PAIR.includes(currentSymbol) || currentSymbol === topElement || stack.length !== 0) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  return stack.length === 0;
}

//check('()', config1), true);