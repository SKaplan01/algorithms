//returns a string that may contain brackets '{}' '[]' and '()'
//returns true is all brackets are closed in order [()]
//returns false is brackets are not closed eg. []( or not closed in order [{s]}
function balancedBrackets(str) {
  let matches = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  //find initial ( { or  [
  //call inner function to look for match
  //inside "lookForClosingBracket"...
  //if find closing bracket, return the index (outer loop picks up)
  //if find a NEW opening bracket, call lookForClosingBracket again (takes string, current index and brakcet sought)

  let matchedNeeded = false;
  for (let j = 0; j <= str.length; j++) {
    matchedNeeded = false;
    if (str[j] === '{' || str[j] === '(' || str[j] === '[') {
      matchedNeeded = true;
      let lookingfor = matches[str[j]];
      j = _findMatchingBracket(str, j + 1, lookingfor);
    }
  }

  function _findMatchingBracket(string, index, bracketNeeded) {
    for (let k = index; k < str.length; k++) {
      if (string[k] === bracketNeeded) {
        return k;
      }
      if (string[k] === '{' || string[k] === '(' || string[k] === '[') {
        k = _findMatchingBracket(string, k + 1, matches[string[k]]);
      }
    }
    return string.length;
  }

  return !matchedNeeded;
}

////////////////////////////
/////////

console.log(balancedBrackets('')); //true
console.log(balancedBrackets('()')); //true
console.log(balancedBrackets('hello')); //true
console.log(balancedBrackets('(hi [there])')); //true
console.log(balancedBrackets('(hi) [there]')); //true
console.log(balancedBrackets('(((hi)))')); //true
console.log(balancedBrackets('(hello')); //false
console.log(balancedBrackets('(nope]')); //false
console.log(balancedBrackets('((ok) [nope)]')); //false
console.log(balancedBrackets('(')); //false
