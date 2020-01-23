$(document).ready(function () {
  $("form#stress-test-survey").submit(function (event) {
    event.preventDefault();

    var warningResponses = [];
    // console.log(warningResponses);
    $("input:checkbox[name=warning]:checked").each(function(){
      var warningSigns = $(this).val();
      // console.log(warningSigns);
      warningResponses.push(warningSigns);
      // console.log(warningResponses.length)
    });

    var symptomsResponses = [];
    // console.log(symptomsResponses)
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomsSigns = $(this).val();
      // console.log(symptomsSigns);
      symptomsResponses.push(symptomsSigns);
      // console.log(symptomsResponses.length);
    });

    var copingResponses = [];
    // console.log(copingResponses)
    $("input:checkbox[name=coping]:checked").each(function(){
      var copingSigns = $(this).val();
      // console.log(copingSigns);
      copingResponses.push(copingSigns);
      // console.log(copingResponses.length);
    });
      if (warningResponses.length > copingResponses.length){
          console.log("1st if statement")
          $("#results-stressed").show();
          $("#results-stressed-suggestions").empty();
          //$("#results-healthly, #results.risk").hide();

          // $("#results-stressed-suggestions").append("<li>" + copingResponses + " " +"</li>");
          //$('#results-stressed').text(copingResponses + "<br>");

        } else if (copingResponses.length > warningResponses.length){
          $("#results-you-are-healthy").show();
          console.log("made it to first else if");
          //$("#results-risk, #results.stressed").hide();

        } else if (copingResponses.length === warningResponses.length){
          $("#results-risk").show();
          // $("#results-healthly, #results.stressed").hide();
        }
         else
          console.log("fail")
        
    });
  });