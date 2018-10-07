const charol = require('./index.js')

const assert = require('assert');
describe('One level topic', () => {
  it('should return only the string of the attributes name', function() {
    eventoTopic = charol( { evento1: null } )
    assert.equal("evento1", eventoTopic.evento1._path);
  });
});

describe('Two level topic', () => {
  it('should return the string of the top level and the first child attribute name separated by dot', function() {
    eventoTopic = charol( { evento1: { evento11: null } } )
    assert.equal("evento1", eventoTopic.evento1._path);
    assert.equal("evento1/evento11", eventoTopic.evento1.evento11._path);
  });
});


describe('One and Two level topic', () => {
  it('should return the string of the top level and the first child attribute name separated by dot', function() {
    eventoTopic = charol( { 
      evento1: { 
        evento11: null, 
        evento12: { 
          evento121: null 
        } 
      }, 
      evento2: null, 
      evento3: { 
        evento31: null 
      } 
    } )
    assert.equal("evento1", eventoTopic.evento1._path);
    assert.equal("evento1/evento11", eventoTopic.evento1.evento11._path);
    assert.equal("evento1/evento12", eventoTopic.evento1.evento12._path);
    assert.equal("evento1/evento12/evento121", eventoTopic.evento1.evento12.evento121._path);
    assert.equal("evento2", eventoTopic.evento2._path);
    assert.equal("evento3", eventoTopic.evento3._path);
    assert.equal("evento3/evento31", eventoTopic.evento3.evento31._path);
  });
});



describe('One, Two and Three level topic', () => {
  it('should return the string of the top level and the first child attribute name separated by dot', function() {
    eventoTopic = charol( { 
      evento1: { 
        evento11: null, 
        evento12: { 
          evento121: null, 
          evento122: null,
          evento123: {
            evento1231: null
          }
        } 
      }, 
      evento2: null, 
      evento3: { 
        evento31: null 
      },
      evento4: { 
        evento41: {
          evento411: null
        } 
      }  
    } )
    assert.equal("evento1", eventoTopic.evento1._path);
    assert.equal("evento1/evento11", eventoTopic.evento1.evento11._path);
    assert.equal("evento1/evento12", eventoTopic.evento1.evento12._path);
    assert.equal("evento1/evento12/evento121", eventoTopic.evento1.evento12.evento121._path);
    assert.equal("evento1/evento12/evento122", eventoTopic.evento1.evento12.evento122._path);
    assert.equal("evento1/evento12/evento123", eventoTopic.evento1.evento12.evento123._path);
    assert.equal("evento1/evento12/evento123/evento1231", eventoTopic.evento1.evento12.evento123.evento1231._path);
    assert.equal("evento2", eventoTopic.evento2._path);
    assert.equal("evento3", eventoTopic.evento3._path);
    assert.equal("evento3/evento31", eventoTopic.evento3.evento31._path);
    assert.equal("evento4", eventoTopic.evento4._path);
    assert.equal("evento4/evento41", eventoTopic.evento4.evento41._path);    
    assert.equal("evento4/evento41/evento411", eventoTopic.evento4.evento41.evento411._path);    
  });
});
