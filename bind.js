$('#opendiv').on('click', function() {
  console.log(this)
  $(this).toggleClass("active");
  $('#div1').slideToggle();
})
