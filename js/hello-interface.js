$(function() {

  var alarm = null;


  $('#make-alarm').click(function() {
    var date = $('#date').val();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    alarm = moment(date).hour(hour).minute(minute);
    $('#alarm-list').append('<li> alarm at: '+ alarm.format() +'</li>');
  });

  setInterval(function(){
    $('#time').text(moment());
    console.log(alarm);
    if ((alarm) && (alarm.format() == moment().format()) ) {
      console.log('party!');
      $('#alarm-gif').append('<img src="http://orig04.deviantart.net/1d04/f/2012/046/4/4/flash_alarm_animated_gif_by_ethan132-d4pw09s.gif" alt="alarm gif"/>')
    }
  }, 1000);

});
