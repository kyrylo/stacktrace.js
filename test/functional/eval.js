$(document).ready(function() {
  var failingCode = "getExceptionProps()";
  var innerEval = "eval(" + failingCode + ")";
  eval(innerEval);
});
