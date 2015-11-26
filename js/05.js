function fizzbuzz(a) {
  var c = a % 3;
  var d = a % 5;
  if (c == 0 && d == 0) {
    return "fizzbuzz"
  } else if (c == 0) {
    return "fizz";
  } else if (d == 0){
    return "buzz";
  }else {
    return a;
  }
}
