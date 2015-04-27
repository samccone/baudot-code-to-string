var decoder = require('../');
var assert = require('assert');

describe('converting binary', function() {
  it('handles the shift header (letter)', function() {
    assert.equal(decoder('1111100011'), 'a');
  });

  it('handles the shift header (unit)', function() {
    assert.equal(decoder('111111101110111'), '1');
  });

  it('handles the toggling of shifts', function() {
    assert.equal(decoder('111110001111011101111111100011'), 'a1a');
  });

  it('handles a common case', function() {
    assert.equal(decoder(
    //jscs:disable
    '11111101000000110010100101100011011011011111100100110110001100011111111001111000010101001001001'),
    //jscs:enable
    'hello! --world');
  });

  it('handles another common case', function() {
    assert.equal(decoder(
    //jscs:disable
    '11111010100000101100100000010001100001100110000001001001101111000101101011011111001001000000110111000000100101'),
    //jscs:enable
    'rent nine 900 times');
  });
});
