module.exports = function(bits) {
  var shifts = {
    '11011': 'figure',
    '11111': 'letter'
  };
  var tables = {
    'figure': require('./lookups/figure-bits-to-char'),
    'letter': require('./lookups/letter-bits-to-char')
  };
  var currentShift = null;

  return bits
  .split('')
  // create 5 bit chunks to do the binary lookup on
  .reduce(function(prev, curr, i) {
    var j = Math.floor(i / 5);

    if (i % 5 === 0) {
      prev[j] = '';
    }

    prev[j] += curr;

    return prev;
  }, [])
  .map(function(v) {
    if (shifts[v] !== undefined) {
      currentShift = shifts[v];
      return '';
    }

    return tables[currentShift][v];
  })
  .join('');
};
