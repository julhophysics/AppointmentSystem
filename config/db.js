const mongoose = require('mongoose')
const logger = require('../config/logs')
const user = process.env.USER_DB
const password = process.env.PASSWORD

async function connect() {
    try {
        await mongoose.connect(
            `mongodb+srv://${user}:${password}@cluster0.abr1iwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        logger.info('Conectado!')
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }
}

module.exports = connect
