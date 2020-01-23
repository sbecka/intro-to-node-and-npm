// 1 + 1;
// console.log('Hello, world!');
// console.log(process.argv);
// let foo = 'abc';
// console.log(foo);

// require() is similar to: import x from 'x'
// const debug = require('debug'); // require local dependency
// debug.enable('*'); // enable all (*) namespaces
// const logger = debug('hello-world-logger'); //create logger
// logger('Testy test test');
// logger('Second testy test test');

const fs = require('fs');
// const chalk = require('chalk-animation');
const { animateString } = require('./animate-string');

const contents = fs.readdirSync('./animals');

animateString(contents.join('\n'));

// const animation = chalk.rainbow(
//     contents.join('\n')
// );
// // animation.stop();
// setTimeout(() => animation.stop(), 1300);
