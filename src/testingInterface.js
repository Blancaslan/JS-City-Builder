const readline = require('readline')

let exitLoop = false
let editMode = false
let mothersWeight = 1
let map = ["h", "h", "o"]

readline.emitKeypressEvents(process.stdin)
if (process.stdin.isTTY) process.stdin.setRawMode(true)

process.stdin.on("keypress", (str, key)=> {
    if ( key.name === "q" || ( key.ctrl && key.name === "c") ) {exitLoop = true}
    if ( key.name === "e") {editMode = true}
})

const intervalId = setInterval(() => {
    if (exitLoop) {
        clearInterval(intervalId)
        process.exit()
    }
    else if (editMode) {
        console.log("\x1b[33mYou have entered edit mode.\x1b")
        editMode = false
    }
    mothersWeight++
})

