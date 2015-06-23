/* global Arduino */
'use strict';

(function() {
  var light = document.querySelector('#light');
  var buttons = document.querySelector('#buttons');
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var blinkTimerID;

  light.addEventListener('connected', function() {
    light.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  buttons.addEventListener('connected', function() {
    buttons.subscribe([6, 7]);
  });

  buttons.addEventListener('digitalpinchanged', function(evt) {
    var pins = evt.detail.pins;
    light.d7 = pins.d7;
    // FIXME: Cannot control more man two devices at same time
    // probably because of BLE APIs.
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

  // For testing and debugging.
  window.light = light;
}());
