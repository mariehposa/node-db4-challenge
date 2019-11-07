const db = require('../data/dbConfig');

function getRecipes () {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('quantity as q')
    .join('ingredients as i', 'q.ingredient_id', 'i.id')
    .select('i.Ingredient_name', 'q.quantity')
    .where('q.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as s')
    .join('recipes as r', 'r.id', 's.recipe_id')
    .select('r.recipe_name', 's.step_number', 's.Instruction')
    .where('s.recipe_id', recipe_id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}