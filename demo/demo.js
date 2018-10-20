const charol = require('charol')

let topicTree = { 
    car: { 
        engine: { 
            temperature: null
        },
        transmission: {
            current: null
        },
        status: null
    } 
}

topicTree = charol(topicTree)

console.log(topicTree.car._path)
console.log(topicTree.car.engine._path)
console.log(topicTree.car.engine.temperature)
console.log(topicTree.car.status);




