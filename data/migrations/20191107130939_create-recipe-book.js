
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 128)
    })
    .createTable('ingredients', table => {
        table.increments()
        table.string('Ingredient_name', 128)
    })
    .createTable('quantity', table => {
        table.increments()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .table('recipes')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .table('ingerdients')
    })
};

exports.down = function(knex) {
  
};
