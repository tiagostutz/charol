const charolFn = (jsonObject) => {

  var jsonObjectMixed = {}
  for (var variable in jsonObject) {
    jsonObjectMixed[`_${variable}`] = variable
    Object.defineProperty(jsonObjectMixed, variable, {
      get: () => { return search('', jsonObjectMixed, jsonObjectMixed[`_${variable}`]) },
      set: (value) => { jsonObjectMixed[`_${variable}`] = value }
    })
  }

  search(path, obj, target) => {
    for (var k in obj) {
        // if (k.indexOf('_') === 0) {
        //   throw "Be careful with the `_` character as it is a `key` at the sistem. Prefer something like `-` to avoid problems`"
        // }
        if (obj.hasOwnProperty(k))
            if (obj[k] === target)
                return path + "." + k
            else if (typeof obj[k] === "object") {
                var result = search(path + "." + k, obj[k], target);
                if (result)
                    return result;
            }
    }
    return false;
  }


}

module.exports = charolFn
