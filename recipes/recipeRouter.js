const express = require('express');
const router = express.Router()
const db = require('./recipeModel');

router.get('/', (req, res) => {
    db.getRecipes()
    .then(allRecipes => {
      res.status(200).json(allRecipes);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get('/:id/instructions', (req, res) => {
    db.getInstructions(req.params.id)
    .then(instr => res.status(200).json(instr))
    .catch(err => {
        res.status(404).json({
            message: "An error occured!" + err.message 
        })
    })
})

router.get('/:id/list', (req, res) => {
    db.getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => {
        res.status(404).json({
            message: "An error occured!" + err.message 
        })
    })
})

module.exports = router;