const charol = require('./index.js')

const assert = require('assert');
describe('One level topic', () => {
  it('should return only the string of the attributes name', function() {
    evento = charol( { "evento1": {} } )
    assert.equal("evento1", evento);
  });
});

describe('Two level topic', () => {
  it('should return the string of the top level and the first child attribute name separated by dot', function() {
    evento = charol( { "evento1": { "evento11": { } } } )
    assert.equal("evento1", evento);
  });
});
