$('#opendiv').on('click', function() {
  console.log(this)
    $(this).toggleClass("active")
    $('#div1').slideToggle(200, function() {
      console.log(this)
      //$(this).toggleClass("Active")
    });
})
