function distance(x1,y1,x2,y2) {
  var ds;
  if (x1 == x2 && y1 == y2) {
    return 0;
  }else {
    ds = Math.sqrt(Math.pow((x1 - x2),2)+ Math.pow((y1 - y2),2))
    return ds;
  }
}
