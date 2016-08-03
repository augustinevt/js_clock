(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
