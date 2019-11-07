const express = require('express')
const helmet = require('helmet')

const recipeRouter = require('./recipes/recipeRouter')
const server = express()
server.use(helmet());
server.use(express.json());

server.use('/api/recipe', recipeRouter );

server.get('/', (req, res) => {
    res.send('Its working!')
})

module.exports = server;