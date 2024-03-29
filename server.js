const path = require('path')
require('dotenv').config({ path: path.resolve('.', '.env') })
const app = require('./src/app/app')
const connect = require('./config/db')
const logger = require('./config/logs')
const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connect()
    logger.info(`Server running on port ${PORT}`)
})
