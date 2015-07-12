/* global five, BleSerialPort */
'use strict';

(function() {
  var serialPort = new BleSerialPort({ address: 'e1:09:43:ea:dd:68' });
  serialPort.connect().then(function() {
    var board = new five.Board({ port: serialPort, repl: false });
    board.on('ready', function() {
      var led = new five.Led(7);
      led.blink(300);
    });
  });
}());
