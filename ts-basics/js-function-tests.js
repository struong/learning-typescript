const { getName } = require('./functions')

// to run node js-function-tests
console.log(
    getName({
        first: "a",
        last: "b"
    })
)

// testing null-ness checking using ? and ??
console.log(
    getName() // will get "first last" if input is undefined
)