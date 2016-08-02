$(function() {


    setInterval(function(){
      $('#time').text(moment());
    }, 1000);


  $('#make-alarm').click(function() {
    var date = $('#date').val();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    alarm = moment(date).hour(hour).minute(minute).format();
    $('#alarm-list').append('<li> alarm at: '+alarm+'</li>');
  });

});
