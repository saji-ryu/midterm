function toOrdinalNumber(a) {
  if (a >= 4 && a <= 20) {
    return a + 'th';
  }else {
    var iti = a % 10;
    if (iti == 1) {
      return a +'st';
    }else if (iti == 2) {
      return a +'nd';
    }else if (iti == 3) {
      return a + 'rd';
    }else {
      return a + 'th';
    }
  }
}
