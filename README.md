# charol

JSON topic object to String representation. Useful for "autocompletion" of the topic paths.

It simply adds a `_path` property to your object containing the `String` representation of the topic path

## How to use

`npm i --save charol`

Define your topic structure as a JSON object and then call the `charol` function passing the object as parameter. For example:

```JSON
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
```

`console.log(topicPaths.home.kitchen._path)`

_> outputs "home/kitchen"_

`console.log(topicPaths.home.kitchen.light.power._path)`

_> outputs "home/kitchen/light/power"_

`console.log(topicPaths.home.kitchen.oven.fire.set._path)`

_> outputs "home/kitchen/oven/fire/set"_
