#!/usr/bin/env node
var fs = require('fs');

process.stdout.write(fs.readFileSync("stdlib.js"));
process.stdout.write(fs.readFileSync("runtime.js"));
process.stdout.write("\nfunction PROGRAM() {\n");

process.stdin.on('data', source => {

	// Normalise before compiling
	source = source.toString();
	source = source.replace('{', ' { ');
	source = source.replace('}', ' } ');

	// Token replacement
	var words = source.match(/"[^"]*"|[^\s]+/g);
	var commands = words.map(word => {
		if(word.match(/^["\/\d]/)) return `STACK.push(${word});`;
		if(word.match(/^[\{]/)) return `STACK.push(function(){`;
		if(word.match(/^[\}]/)) return `});`;
		return `DO("${word}");`
	});

	process.stdout.write(commands.join('\n'));

});

process.stdin.on('end', () => process.stdout.write("\n};\n"));