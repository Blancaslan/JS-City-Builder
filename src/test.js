const blessed = require('blessed');

let counter = 0

// Create a blessed screen
const screen = blessed.screen({
  smartCSR: true,
});

// Simulate changing the content of Line 2 after 2 seconds
setInterval(() => {
  counter++
  let text = "Money: " + counter
  screen.append(blessed.text({ content: text, top: 0 }))
  screen.render()
}, 1000)