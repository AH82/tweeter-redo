$(document).ready(function() {

  $("textarea").on("input", function () {
    const CHAR_LIMIT = 140;

    let TextCurrentLength = CHAR_LIMIT - $(this).val().length;
    const counter = $(this).parent().find("output.counter");
    const counterWarning = "counter-warning";

    $(counter).val(TextCurrentLength);
    TextCurrentLength < 0 ? 
      $(counter).addClass(counterWarning) 
      : $(counter).removeClass(counterWarning);
  })

});