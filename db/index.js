const { faker } = require("@faker-js/faker")

const mailDb = {
	messages: [],

	generateMessages() {
		const countNewMessages = Math.random() * 2

		this.messages = []

		for (let index = 0; index < countNewMessages; index += 1) {
			const message = {
				id: faker.datatype.uuid(),
				from: faker.internet.email(),
				subject: faker.lorem.words(),
				body: faker.lorem.words(7),
				received: Date.now()
			}

			this.messages.push(message)
		}
	}
}

module.exports = mailDb
