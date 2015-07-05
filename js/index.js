/* global Arduino */
'use strict';

(function() {
  var light = new Arduino({ address: 'e1:09:43:ea:dd:68' });
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var blinkTimerID;

  light.on('connect', function() {
    console.log('The light board is connected.');
    light.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    light.d7 = !light.d7;
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        light.d7 = !light.d7;
      }, 300);
    }
  });

  // For debugging.
  window.light = light;
}());
