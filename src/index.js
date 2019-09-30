module.exports = function check(str, bracketsConfig) {
  // your solution
  let answer = false;  
  let checkBadSymbolInStr = str;  
  let checkBadSymbol;
  let closedPairBrackets = [];
  let i = 0;
  let removeBrackets = true;
  let strTemp;
  // console.log(str);
  // console.log(bracketsConfig);

  for (let brackets of bracketsConfig) {
    // console.log(brackets);    
    closedPairBrackets[i] = brackets.toString().replace(',','');
    // console.log(closedPairBrackets[i]);    
    i++;
/*     for (let bracket of brackets) {
        checkBadSymbolInStr = checkBadSymbolInStr.replace(bracket,'');   
    }         */
  }
  // if(checkBadSymbolInStr == "") checkBadSymbol = true;

  while (removeBrackets) { 
    removeBrackets = false;
    for (let closedPair of closedPairBrackets) {
        strTemp = str;
        // console.log("Str start= " + str);    
        str = str.replace(closedPair,'');
        // console.log("Str finish= " + str);    
        if(str.length < strTemp.length) removeBrackets = true;
      }
  }

  if(str == "") answer = true;
   else answer = false;

  return answer;
}
