# charol

JSON topic object to String representation. Useful for "autocompletion" of the topic paths.

It assigns to the last object level (leaf) the `String` representation of the topic path from root to this attribute.
Also it adds a `_path` property to the intermediate object levels of the your object "tree"

## How to use

`npm i --save charol`

Define your topic structure as a JSON object and then call the `charol` function passing the object as parameter. For example:

```JS
let topicScheme = {
    "home": {
        "kitchen": {
            "light": {
                "power": {
                    "set": null,
                },
                "temperature": null
            },
            "oven": {
                "gas": null,
                "fire": {
                    "set": null
                }
            }
        }
    }
}

const topicPaths = charol(topicScheme)
```Javascript

`console.log(topicPaths.home.kitchen.light.temperature)`

_> outputs "home/kitchen/light/temperature"_

`console.log(topicPaths.home.kitchen.oven.fire.set)`

_> outputs "home/kitchen/oven/fire/set"_

`console.log(topicPaths.home.kitchen._path)`

_> outputs "home/kitchen"_

`console.log(topicPaths.home.kitchen.light.power._path)`

_> outputs "home/kitchen/light/power"_

```

### Example that works fine with VSCode and ReactJS

topics.js:
```Javascript

let topics = {
    chatList: {
        select: null,
        message: {
            new: null
        }
    }
}

topics = charol(topics)

export default topics

```
![](https://res.cloudinary.com/stutzsolucoes/image/upload/v1539905681/demo-2_qyvsnr.gif)
![](https://res.cloudinary.com/stutzsolucoes/image/upload/v1538952292/demo_xkzg73.gif)
