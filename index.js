#!/usr/bin/env node

const init = require('./utils/init');
const cli = require('./utils/cli');
const end = require('./utils/end');

(async () => {
	let flags = [];
	flags = [...process.argv.slice(2)];

	let length = 10;

	if (flags.indexOf('--fifteen') !== -1) {
		length = 15;
	}

	init();
	await cli(length);
	end();
})();
