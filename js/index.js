/* global Arduino */
'use strict';

(function() {
  var webArduino = document.querySelector('#webArduino');
  var power = document.querySelector('#power');

  webArduino.addEventListener('load', function webArduinoOnLoad() {
    webArduino.removeEventListener('load', webArduinoOnLoad);
    var arduino = new Arduino({ address: 'e1:09:43:ea:dd:68' });
    arduino.on('connected', function() {
      arduino.d7 = Arduino.HIGH;
      power.disabled = false;
    });

    power.addEventListener('click', function() {
      if (arduino.d7) {
        arduino.d7 = Arduino.LOW;
      } else {
        arduino.d7 = Arduino.HIGH;
      }
    });
  });
}());
