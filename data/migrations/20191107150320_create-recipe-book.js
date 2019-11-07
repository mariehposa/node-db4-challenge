

exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('r_id')
            table.string('recipe_name', 128)
        })
        .createTable('ingredients', table => {
            table.increments('i_id')
            table.string('Ingredient_name', 128)
        })
        .createTable('quantity', table => {
            table.increments()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('r_id')
                .inTable('recipes')
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('i_id')
                .inTable('ingredients')
            table.decimal('quantity')
                .unsigned()
                .notNullable()
        })
        .createTable('steps', table => {
            table.increments()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('r_id')
                .inTable('recipes')
            table.integer('step_number')
                .unsigned()
                .notNullable()
            table.string('Instruction')
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('quantity')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};

