$('#opendiv').on('click', function() {
  console.log(this)
    var that = this
    $('#div1').slideToggle(200, function() {
      console.log(that)
      $(that).toggleClass("active")
    });
})
