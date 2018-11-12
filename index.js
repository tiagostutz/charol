'use strinct'

const objWalk = function(topics, key) {

  Object.keys(topics).forEach( function(k) {
    const accKey = key != "" ? key+"/"+k : k
    
    if (topics[k] == null) {
      topics[k] = accKey
    }else{
      objWalk(topics[k], accKey)
      topics[k]._path = accKey
    }
  })
}

const charol = function(topicObj) {
  objWalk(topicObj, "")
  return topicObj
}

module.exports = charol