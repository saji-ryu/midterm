function isLeapYear(a) {
  var e = a % 4;
  var f = a % 100;
  var g = a % 400;
  if (e == 0 && f != 0) {
    return true;
  } else if (e == 0 && f == 0 && g != 0) {
    return false;
  } else if (e == 0 && g ==0) {
    return true;
  }else {
    return false;
  }
}
