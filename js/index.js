/* global Arduino */
'use strict';

(function() {
  var arduino = new Arduino({ address: 'e1:09:43:ea:dd:68' });
  var led = new Arduino.Led(arduino, { pin: 7 });
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');

  arduino.on('connect', function() {
    led.toggle(true);
    power.disabled = false;
    blink.disabled = false;
  });

  power.addEventListener('click', function() {
    led.toggle();
  });

  blink.addEventListener('click', function() {
    if (led.isBlinking) {
      led.stop();
    } else {
      led.blink(300);
    }
  });

  // For debugging.
  window.arduino = arduino;
}());
