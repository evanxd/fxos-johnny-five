/* global Arduino */
'use strict';

(function() {
  var webArduino = document.querySelector('#webArduino');
  webArduino.addEventListener('load', function webArduinoOnLoad() {
    webArduino.removeEventListener('load', webArduinoOnLoad);
    var arduino = new Arduino({ address: 'e1:09:43:ea:dd:68' });
    arduino.on('connected', function() {
      arduino.d7 = Arduino.HIGH;
    });
  });
}());
