const test = require('tape');
const romanizer = require('../romanizer.js');

test('arabic => roman', function(t) {
  t.equals(romanizer(1), 'I', '1 => I');
  t.end();
});
