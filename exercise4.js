function isVowel(x){
  var y = x.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  //I couldn't think how to do this without using a for loop. Using the or symbol seemed too repetitive
  for (i=0; i<vowels.length; i++) {
    if (y == vowels[i]){
    return true;
    }
  }
  return false;
}
console.log(isVowel('B'));
console.log(isVowel('c'));
console.log(isVowel('U'));
console.log(isVowel('e'));
console.log(isVowel('x'));
