$(document).ready(function (){
  $(".ourButton").click(function(){
  var weak = $("select#weak").val();
  var fairness = $("select#fairness").val();
  var liberty = $("select#liberty").val();
  var loyalty = $("select#loyalty").val();
  var respect = $("select#respect").val();
  var sanctity = $("select#sanctity").val();

  var value = "";

  if (weak === "true" && fairness ==="true" && liberty ==="true" && loyalty ==="false" && respect ==="false" && sanctity ==="false") {
    value = "liberal";
  } else if (weak === "true" && fairness ==="true" && liberty ==="true" && loyalty ==="true" && respect ==="true" && sanctity ==="true") {
    value = "conservative";
  } else {
    value = "moderate";
  }
  $("#value").text(value);
  $("#answer").show();
  });
});
