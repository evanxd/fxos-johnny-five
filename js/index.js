/* global Arduino */
'use strict';

(function() {
  var light1 = document.querySelector('#light1');
  var light2 = document.querySelector('#light2');
  var buttons = document.querySelector('#buttons');
  var power = document.querySelector('#power');
  var blink = document.querySelector('#blink');
  var blinkTimerID;

  light1.addEventListener('connected', function() {
    light1.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  light2.addEventListener('connected', function() {
    light2.d7 = Arduino.HIGH;
    power.disabled = false;
    blink.disabled = false;
  });

  buttons.addEventListener('connected', function() {
    buttons.subscribe([6, 7]);
  });

  buttons.addEventListener('digitalpinchanged', function(evt) {
    var pins = evt.detail.pins;
    light1.d7 = pins.d7;
    // FIXME: Cannot control more man two devices at same time
    // probably because of BLE APIs.
    // light2.d7 = pins.d7;
  });

  power.addEventListener('click', function() {
    light1.d7 = !light1.d7;
    light2.d7 = !light2.d7;
  });

  blink.addEventListener('click', function() {
    if (blinkTimerID) {
      clearInterval(blinkTimerID);
      blinkTimerID = null;
    } else {
      blinkTimerID = setInterval(function() {
        light1.d7 = !light1.d7;
        light2.d7 = !light2.d7;
      }, 300);
    }
  });

  // For testing and debugging.
  window.light1 = light1;
  window.light2 = light2;
}());
