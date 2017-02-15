//function 'yell' that returns an uppercase string

function yell(x) {
    return (x.toUpperCase());
}
var yellStr = yell("hi everyone")
console.log(yellStr)

//function that returns your yell function 10 times

function yell10(x){
  return yellStr.repeat(10);
}
console.log(yell10(yellStr));
//I couldn't figure out how to put a function within a function, I had to create another variable to get it to work properly
