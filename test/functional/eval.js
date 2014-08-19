Bugsnag.endpoint = "http://kyrylo.org:8000/js";

$(document).ready(function() {
  var failingCode = "getExceptionProps()";
  var innerEval = "eval(" + failingCode + ")";
  eval(innerEval);
});
