const objWalk = (topics, key) => {

  Object.keys(topics).forEach(k => {
    const accKey = key != "" ? `${key}/${k}` : k
    
    if (topics[k] == null) {
      topics[k] = { _path: accKey }
    }else{
      objWalk(topics[k], accKey)
      topics[k]._path = accKey
    }
  })
}

const charol = (topicObj) => {
  objWalk(topicObj, "")
  return topicObj
}

module.exports = charol