const clipboardy = require('clipboardy');

module.exports = async length => {
	let character =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
	let password = '';
	let charactersLength = character.length;

	for (let i = 0; i < length; i++) {
		password += character[Math.floor(Math.random() * charactersLength)];
	}

	console.log('Your password:', password, '\n');

	try {
		await clipboardy.write(password);
	} catch (err) {
		console.log(err);
	}
};
