const express = require('express')
const helmet = require('helmet')

const recipeRouter = require('./recipes/recipeRouter')

server.use(helmet());
server.use(express.json());

server.use('/api/recipe', recipeRouter );

server.get('/', (req, res) => {
    console.log('Its working!')
})

module.exports = server;