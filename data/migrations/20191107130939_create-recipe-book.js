
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
            .table('ingredients')
        table.float('quantity')
        .unsigned()
        .notNullable()
    })
    .createTable('steps', table => {
        table.increments()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .table('recipes')
        table.integer('step_number')
            .unsigned()
            .notNullable()
        table.string('Instruction')
    })
};

exports.down = function(knex) {
  
};
