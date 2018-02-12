const test = require('tape');
const romanizer = require('../romanizer.js');
const translator = require('../romanizer.js').translator;

test('arabic => roman', function(t) {
  t.equals(romanizer(1), 'I', '1 => I');
  t.equals(romanizer(2), 'II', '2 => II');
  t.equals(romanizer(4), 'IV', '4 => IV');
  t.equals(romanizer(5), 'V', '5 => V');
  t.equals(romanizer(6), 'VI', '6 => VI');
  t.equals(romanizer(7), 'VII', '7 => VII');
  t.equals(romanizer(8), 'VIII', '8 => VIII');
  t.equals(romanizer(9), 'IX', '9 => IX');
  t.equals(romanizer(10), 'X', '10 => X');
  t.equals(romanizer(12), 'XII', '12 => XII');
  t.equals(romanizer(25), 'XXV', '25 => XXV');






  t.end();
});
