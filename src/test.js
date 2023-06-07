const RESET = '\x1b[0m';
const RED = '\x1b[44m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BOLD = '\x1b[1m';
const UNDERLINE = '\x1b[4m';

console.log(RED + '0' + RESET);
console.log('This text is green.' + RESET);
console.log(YELLOW + 'This text is yellow.' + RESET);
console.log(BOLD + 'This text is bold.' + RESET);
console.log(UNDERLINE + 'This text is underlined.' + RESET);