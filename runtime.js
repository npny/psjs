const FN = STDLIB;
const STACK = [];
const DEBUG_TRACE = [];

function DO(name) {

	DEBUG_TRACE.push({stack: STACK.slice(), call: name});
	const input = STACK.splice(-FN[name].length);
	const output = FN[name].apply(undefined, input);	

	if(output == undefined) return;

	if(output.constructor == Array)
		Array.prototype.splice.apply(STACK, [].concat([STACK.length-1, 0], output));
	else
		STACK.push(output);
}

function ERROR(e) {

const traceDepth = 5;
console.error(`Error at:

▼ ...
${
	DEBUG_TRACE
	.slice(-traceDepth)
	.map((step, index) =>
		step.stack.join(' | ') + '\n' +
		(index < traceDepth-1) ?
			'▼ ' :
			'► ' + step.call
	)
	.join('\n')
}
  ${DEBUG_TRACE.slice(-1).map(step => FN[step.call].toString())}
  ${e.toString().match(/.*$/)[0]}

`);
}

try { PROGRAM(); console.log(STACK.join('\n')); } catch(e) { ERROR(e); }