const STDLIB = {
	// String manipulation
	"join": (a, b) => a + b,
	"match": (string, regexp) => string.match(regexp),
	"replace": (string, regexp, replacement) => string.replace(regexp, replacement),
	"split": (string, delimiter) => string.split(delimiter),
	"chunks": (string, chunkSize) => {let res = []; for(let i = 0; i < string.length; i += chunkSize) res.push(string.substr(i, chunkSize)); return res;},
	
	// Conversion & formatting
	"from-ascii": char => char.charCodeAt(0),
	"to-ascii": charCode => String.fromCharCode(charCode),
	"from-base": (string, base) => parseInt(string, base),
	"to-base": (number, base) => number.toString(base),
	"pad-left": (string, pattern, length) => ((new Array(length).join(pattern)) + string).substr(0, length)
	"pad-right": (string, pattern, length) => (string + (new Array(length).join(pattern))).substr(0, length)
	
	// Maths
	"pow": (a, b) => Math.pow(a, b),
	"mul": (a, b) => a * b,
	"add": (a, b) => a + b,
	"neg": x => -x,
	"inv": x => 1/x,
	"abs": x => Math.abs(x),
	"ceil": x => Math.ceil(x),
	"floor": x => Math.floor(x),
	"round": x => Math.round(x),

	// Conditions
	"gt": (a, b) => a > b,
	"lt": (a, b) => a < b,
	"eq": (a, b) => a == b,
	"and": (a, b) => a && b,
	"or": (a, b) => a || b,
	"not": x => !x,
	"if": (condition, code) => {if(condition) code()},
	"ternary": (condition, valueA, valueB) => (condition ? valueA : valueB),
	
	// Stack & control
	"pop": item => {},
	"dup": item => [item, item],
	"swap": (a, b) => {const tmp = STACK[a%STACK.length]; STACK[a%STACK.length] = STACK[b%STACK.length]; STACK[b%STACK.length] = tmp;},
	"nop": () => {},
	"until-empty": code => {while(STACK.length) code();},
	"until-zero": code => {while(STACK[STACK.length-1]) code();},
	"in": () => require('fs').readFileSync(process.stdin.fd, 'utf8'),
	"out": item => console.log(item),
	"random": range => Math.floor(Math.random()*max),
};
