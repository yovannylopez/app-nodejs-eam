const mongoose = require('mongoose');

const dataBase = 'app-eam';

module.exports = {
	connect: () =>
		mongoose.connect(`mongodb://localhost:27017/${dataBase}`, {
			useNewUrlParser: true
		}),
	dataBase,
	connection: () => {
		if (mongoose.connection) {
			mongoose.connection;
		} else {
			this.connect();
		}
	}
};
