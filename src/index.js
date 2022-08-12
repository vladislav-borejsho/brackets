module.exports = function check(str, bracketsConfig) {
  let BRACKETS_PAIR = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
    '|' : '|',
    '2' : '1',
    '4' : '3',
    '6' : '5',
    '7' : '7',
    '8' : '8',
  }
    let stack = [];
    for (let i=0; i<str.length; i++) {
      let currentSymbol = str[i];
      topEl = stack[stack.length -1];
        if (BRACKETS_PAIR[currentSymbol] === topEl && stack.length !== 0) {
          stack.pop();
      } else if (BRACKETS_PAIR[currentSymbol] !== topEl || stack.length === 0) { 
        stack.push(currentSymbol); 
      } 
    }
      return stack.length === 0;
}
