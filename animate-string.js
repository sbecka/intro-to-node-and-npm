const chalk = require('chalk-animation');

const validMethods = [`glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow`];

const scriptArg = process.argv[2];

const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';

function animateString(string) {
    // const animation = chalk.rainbow(string);
    const animation = chalk[method](string);
    setTimeout(() => animation.stop(), 1300)
}
// // default export
// module.exports = animateString;

//named export
module.exports = { animateString: animateString };

//You can also use object shorthand to write the same code
//module.exports = { animateString };