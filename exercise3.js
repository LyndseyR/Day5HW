function longest (x, y) {
  if (x.length > y.length){
    return x;
  } else if (y.length > x.length){
    return y;
  } else {
    return "They are equal in length";
  }
}
console.log(longest("hi there are you doing okay today?", "hi there"));

//Trying a function using an Array

function longestArray (x, y) {
  if(x.length > y.length){
    return x;
  } else if (y.length > x.length){
    return y;
  } else {
    return "They are equal in length";
  }
}
console.log(longestArray([1,2,3,4,5],[1,12,344,45,555]));
