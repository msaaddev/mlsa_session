const clipboardy = require('clipboardy');
const chalk = require('chalk');

module.exports = async length => {
	let character =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
	let password = '';
	let charactersLength = character.length;

	for (let i = 0; i < length; i++) {
		password += character[Math.floor(Math.random() * charactersLength)];
	}

	console.log(chalk.black.bgCyan.bold(' Your Password '), password, '\n');

	try {
		await clipboardy.write(password);
	} catch (err) {
		console.log(err);
	}
};
